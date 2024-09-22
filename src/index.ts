import { getColorFromNumber } from "./colors";

const katexHtmlToExpr = (html: HTMLElement[]): string | undefined => {
  let text = "";
  for (const element of html) {
    if (element.classList.contains("mord")) {
      if (element.childElementCount > 0) {
        const data = katexHtmlToExpr(
          Array.from(element.children) as HTMLSpanElement[],
        );
        if (data === undefined) {
          return undefined;
        }
        text += data;
      } else if (element.textContent === "\u2212") {
        // minus sign
        text += "-";
      } else {
        text += element.textContent;
      }
    } else if (element.classList.contains("mbin")) {
      text += element.textContent;
    } else if (element.classList.contains("msupsub")) {
      const root = element.querySelector(".mtight");
      if (!root) {
        console.warn("msupsub without mtight", element);
        return undefined;
      }
      const elements = Array.from(
        root.querySelectorAll<HTMLSpanElement>(":scope > span"),
      );
      const parsed = katexHtmlToExpr(elements);
      if (parsed === undefined) {
        return undefined;
      }
      text += `^(${parsed})`;
    }
  }

  return text;
};

type Tree = string | number | Tree[];
const parseExpr = (expr: string): Tree => {
  let bracket = 0;
  const result = [];
  let current = "";
  for (const c of expr) {
    if (c === "(") {
      bracket++;
      if (bracket === 1) {
        continue;
      }
    } else if (c === ")") {
      bracket--;
      if (bracket === 0) {
        result.push(parseExpr(current));
        current = "";
        continue;
      }
    }

    if (bracket === 0 && c === "×") {
      result.push(current);
      current = "";
      result.push("*");
    } else if (bracket === 0 && c === "^") {
      result.push(current);
      current = "";
      result.push("^");
    } else {
      current += c;
    }
  }
  if (current.length > 0) {
    result.push(current);
  }
  return result;
};

const calculateTree = (tree_: Tree): number => {
  const tree = structuredClone(tree_);
  if (typeof tree === "string") {
    return Number.parseInt(tree);
  }
  if (typeof tree === "number") {
    return tree;
  }
  if (tree.length === 1) {
    return Number.parseInt(tree[0] as string);
  }

  for (let i = 1; i < tree.length; i += 2) {
    if (tree[i] === "^") {
      const base = calculateTree(tree[i - 1]);
      const power = calculateTree(tree[i + 1]);
      tree.splice(i - 1, 3, base ** power);

      i -= 2;
    }
  }
  for (let i = 1; i < tree.length; i += 2) {
    if (tree[i] === "*") {
      const left = calculateTree(tree[i - 1]);
      const right = calculateTree(tree[i + 1]);
      tree.splice(i - 1, 3, left * right);

      i -= 2;
    }
  }
  if (tree.length !== 1) {
    throw new Error(`Invalid tree, ${tree}`);
  }
  if (typeof tree[0] !== "number") {
    throw new Error(`Invalid tree, ${tree}`);
  }
  return tree[0];
};

const colorize = (elements: HTMLElement[]): number | undefined => {
  const math = katexHtmlToExpr(elements);
  if (math === undefined) {
    return;
  }
  if (!math.match(/^[0-9\-×\^()]+$/)) {
    return;
  }
  const parsed = parseExpr(math);
  const result = calculateTree(parsed);
  const color = getColorFromNumber(result);
  for (const e of elements) {
    e.style.color = color;
  }

  return result;
};

const getVariable = (element: HTMLSpanElement): string | undefined => {
  if (!element.classList.contains("mord")) {
    return undefined;
  }
  if (element.classList.contains("mathnormal")) {
    return element.textContent ?? undefined;
  }
  if (element.children[0]?.classList?.contains("mathnormal")) {
    return element.children[0].textContent ?? undefined;
  }
  return undefined;
};

const separators = ["mpunct", "mrel", "mopen", "mclose", "mop"];
type Statement = { elements: HTMLSpanElement[]; maxValue: number };

const colorizeAll = () => {
  const constraintHeaders = Array.from(
    document.getElementsByTagName("h3"),
  ).filter((e) => e.textContent === "制約" || e.textContent === "Constraints");
  for (const header of constraintHeaders) {
    const constraintRoot = header.nextElementSibling;
    if (!constraintRoot) {
      return;
    }
    colorizeSection(constraintRoot as HTMLElement);
  }
};
const colorizeSection = (constraintRoot: HTMLElement) => {
  const variableMaxes: Record<string, number> = {};

  const maths = Array.from(
    constraintRoot.querySelectorAll(".katex-html:not([data-alc-colorized])"),
  );
  for (const math of maths) {
    math.setAttribute("data-alc-colorized", "true");

    const elements = Array.from(
      math.querySelectorAll<HTMLSpanElement>(".base > span"),
    ).filter((e) => !!e.textContent);

    const currentElements: HTMLSpanElement[] = [];
    const currentStatement: Statement = { elements: [], maxValue: 0 };
    const colorizeCurrentStatement = () => {
      for (const e of currentStatement.elements.filter((e) => getVariable(e))) {
        const variable = getVariable(e);
        if (!variable) {
          continue;
        }
        e.style.color = getColorFromNumber(currentStatement.maxValue);
        variableMaxes[variable] = Math.abs(currentStatement.maxValue);
      }
      currentStatement.elements.length = 0;
      currentStatement.maxValue = 0;
    };
    const colorizeCurrentElement = () => {
      const value = colorize(currentElements);
      if (value !== undefined && Math.abs(value) > currentStatement.maxValue) {
        currentStatement.maxValue = Math.abs(value);
      }
      currentElements.length = 0;
    };

    let willCheckSeparator = false;

    for (const [i, element] of elements.entries()) {
      if (willCheckSeparator) {
        willCheckSeparator = false;
        if (!getVariable(elements[i - 2]) || !getVariable(element)) {
          currentStatement.elements.pop();
          colorizeCurrentStatement();
        }
      }
      if (element.classList.contains("mpunct")) {
        willCheckSeparator = true;
      }
      if (Array.from(element.classList).some((c) => separators.includes(c))) {
        if (currentElements.length > 0) {
          colorizeCurrentElement();
        }

        currentStatement.elements.push(element);
        continue;
      }
      const variable = getVariable(element);
      if (variable) {
        if (variableMaxes[variable]) {
          element.style.color = getColorFromNumber(variableMaxes[variable]);
          if (currentStatement.maxValue < variableMaxes[variable]) {
            currentStatement.maxValue = variableMaxes[variable];
          }
        }
      }

      currentElements.push(element);
      currentStatement.elements.push(element);
    }
    if (currentElements.length > 0) {
      colorizeCurrentElement();
      colorizeCurrentStatement();
    }
  }
};

setInterval(() => {
  colorizeAll();
}, 100);
