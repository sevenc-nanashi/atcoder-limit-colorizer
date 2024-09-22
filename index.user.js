// ==UserScript==
// @name AtCoder Limit Colorizer
// @description AtCoderの制約を色付けします
// @version 0.0.1
// @homepage https://github.com/sevenc-nanashi/atcoder-limit-colorizer
// @author Nanashi. <https://sevenc7c.com>
// @match https://atcoder.jp/contests/*/tasks/*
// @updateURL https://raw.githubusercontent.com/sevenc-nanashi/atcoder-limit-colorizer/built/index.user.js
// @downloadURL https://raw.githubusercontent.com/sevenc-nanashi/atcoder-limit-colorizer/built/index.user.js
// @sandbox MAIN_WORLD
// ==/UserScript==

"use strict";(()=>{var y="#804000",E="#008000",L="#00c0c0",S="#0000ff",T="#c0c000",C="#ff8000",M="#ff0000",H="#0dcaf0",m=r=>{let e=Math.abs(r);return e===998244353||e===1000000007?H:e>=1e18?M:e>=1e9?C:e>=1e5?T:e>=1e3?S:e>=100?L:e>=10?E:y};var d=r=>{let e="";for(let t of r)if(t.classList.contains("mord"))if(t.childElementCount>0){let n=d(Array.from(t.children));if(n===void 0)return;e+=n}else t.textContent==="\u2212"?e+="-":e+=t.textContent;else if(t.classList.contains("mbin"))e+=t.textContent;else if(t.classList.contains("msupsub")){let n=t.querySelector(".mtight");if(!n){console.warn("msupsub without mtight",t);return}let o=Array.from(n.querySelectorAll(":scope > span")),i=d(o);if(i===void 0)return;e+=`^(${i})`}return e},b=r=>{let e=0,t=[],n="";for(let o of r){if(o==="("){if(e++,e===1)continue}else if(o===")"&&(e--,e===0)){t.push(b(n)),n="";continue}e===0&&o==="\xD7"?(t.push(n),n="",t.push("*")):e===0&&o==="^"?(t.push(n),n="",t.push("^")):n+=o}return n.length>0&&t.push(n),t},f=r=>{let e=structuredClone(r);if(typeof e=="string")return Number.parseInt(e);if(typeof e=="number")return e;if(e.length===1)return Number.parseInt(e[0]);for(let t=1;t<e.length;t+=2)if(e[t]==="^"){let n=f(e[t-1]),o=f(e[t+1]);e.splice(t-1,3,n**o),t-=2}for(let t=1;t<e.length;t+=2)if(e[t]==="*"){let n=f(e[t-1]),o=f(e[t+1]);e.splice(t-1,3,n*o),t-=2}if(e.length!==1)throw new Error(`Invalid tree, ${e}`);if(typeof e[0]!="number")throw new Error(`Invalid tree, ${e}`);return e[0]},A=r=>{let e=d(r);if(e===void 0||!e.match(/^[0-9\-×\^()]+$/))return;let t=b(e),n=f(t),o=m(n);for(let i of r)i.style.color=o;return n},u=r=>{if(r.classList.contains("mord")){if(r.classList.contains("mathnormal"))return r.textContent??void 0;if(r.children[0]?.classList?.contains("mathnormal"))return r.children[0].textContent??void 0}},V=["mpunct","mrel","mopen","mclose","mop"],w=()=>{let r=Array.from(document.getElementsByTagName("h3")).filter(e=>e.textContent==="\u5236\u7D04"||e.textContent==="Constraints");for(let e of r){let t=e.nextElementSibling;if(!t)return;v(t)}},v=r=>{let e={},t=Array.from(r.querySelectorAll(".katex-html:not([data-alc-colorized])"));for(let n of t){n.setAttribute("data-alc-colorized","true");let o=Array.from(n.querySelectorAll(".base > span")).filter(a=>!!a.textContent),i=[],l={elements:[],maxValue:0},h=()=>{for(let a of l.elements.filter(s=>u(s))){let s=u(a);s&&(a.style.color=m(l.maxValue),e[s]=Math.abs(l.maxValue))}l.elements.length=0,l.maxValue=0},x=()=>{let a=A(i);a!==void 0&&Math.abs(a)>l.maxValue&&(l.maxValue=Math.abs(a)),i.length=0},p=!1;for(let[a,s]of o.entries()){if(p&&(p=!1,(!u(o[a-2])||!u(s))&&(l.elements.pop(),h())),s.classList.contains("mpunct")&&(p=!0),Array.from(s.classList).some(g=>V.includes(g))){i.length>0&&x(),l.elements.push(s);continue}let c=u(s);c&&e[c]&&(s.style.color=m(e[c]),l.maxValue<e[c]&&(l.maxValue=e[c])),i.push(s),l.elements.push(s)}i.length>0&&(x(),h())}};setInterval(()=>{w()},100);})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvbG9ycy50cyIsICIuLi9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBncmF5ID0gXCIjODA4MDgwXCI7XG5leHBvcnQgY29uc3QgYnJvd24gPSBcIiM4MDQwMDBcIjtcbmV4cG9ydCBjb25zdCBncmVlbiA9IFwiIzAwODAwMFwiO1xuZXhwb3J0IGNvbnN0IGN5YW4gPSBcIiMwMGMwYzBcIjtcbmV4cG9ydCBjb25zdCBibHVlID0gXCIjMDAwMGZmXCI7XG5leHBvcnQgY29uc3QgeWVsbG93ID0gXCIjYzBjMDAwXCI7XG5leHBvcnQgY29uc3Qgb3JhbmdlID0gXCIjZmY4MDAwXCI7XG5leHBvcnQgY29uc3QgcmVkID0gXCIjZmYwMDAwXCI7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsID0gXCIjMGRjYWYwXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xvckZyb21OdW1iZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICBjb25zdCBhVmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG4gIGlmIChhVmFsdWUgPT09IDk5ODI0NDM1MyB8fCBhVmFsdWUgPT09IDEwMDAwMDAwMDcpIHtcbiAgICByZXR1cm4gc3BlY2lhbDtcbiAgfVxuICBpZiAoYVZhbHVlID49IDEwKioxOCkge1xuICAgIHJldHVybiByZWQ7XG4gIH1cbiAgaWYgKGFWYWx1ZSA+PSAxMCoqOSkge1xuICAgIHJldHVybiBvcmFuZ2U7XG4gIH1cbiAgaWYgKGFWYWx1ZSA+PSAxMCoqNSkge1xuICAgIHJldHVybiB5ZWxsb3c7XG4gIH1cbiAgaWYgKGFWYWx1ZSA+PSAxMDAwKSB7XG4gICAgcmV0dXJuIGJsdWU7XG4gIH1cbiAgaWYgKGFWYWx1ZSA+PSAxMDApIHtcbiAgICByZXR1cm4gY3lhbjtcbiAgfVxuICBpZiAoYVZhbHVlID49IDEwKSB7XG4gICAgcmV0dXJuIGdyZWVuO1xuICB9XG4gIHJldHVybiBicm93bjtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0Q29sb3JGcm9tTnVtYmVyIH0gZnJvbSBcIi4vY29sb3JzXCI7XG5cbmNvbnN0IGthdGV4SHRtbFRvRXhwciA9IChodG1sOiBIVE1MRWxlbWVudFtdKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgbGV0IHRleHQgPSBcIlwiO1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaHRtbCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1vcmRcIikpIHtcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBkYXRhID0ga2F0ZXhIdG1sVG9FeHByKFxuICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikgYXMgSFRNTFNwYW5FbGVtZW50W10sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gZGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcXHUyMjEyXCIpIHtcbiAgICAgICAgLy8gbWludXMgc2lnblxuICAgICAgICB0ZXh0ICs9IFwiLVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYmluXCIpKSB7XG4gICAgICB0ZXh0ICs9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1zdXBzdWJcIikpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXRpZ2h0XCIpO1xuICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIm1zdXBzdWIgd2l0aG91dCBtdGlnaHRcIiwgZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oXG4gICAgICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MU3BhbkVsZW1lbnQ+KFwiOnNjb3BlID4gc3BhblwiKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBrYXRleEh0bWxUb0V4cHIoZWxlbWVudHMpO1xuICAgICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0ZXh0ICs9IGBeKCR7cGFyc2VkfSlgO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufTtcblxudHlwZSBUcmVlID0gc3RyaW5nIHwgbnVtYmVyIHwgVHJlZVtdO1xuY29uc3QgcGFyc2VFeHByID0gKGV4cHI6IHN0cmluZyk6IFRyZWUgPT4ge1xuICBsZXQgYnJhY2tldCA9IDA7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgY3VycmVudCA9IFwiXCI7XG4gIGZvciAoY29uc3QgYyBvZiBleHByKSB7XG4gICAgaWYgKGMgPT09IFwiKFwiKSB7XG4gICAgICBicmFja2V0Kys7XG4gICAgICBpZiAoYnJhY2tldCA9PT0gMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiKVwiKSB7XG4gICAgICBicmFja2V0LS07XG4gICAgICBpZiAoYnJhY2tldCA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUV4cHIoY3VycmVudCkpO1xuICAgICAgICBjdXJyZW50ID0gXCJcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJyYWNrZXQgPT09IDAgJiYgYyA9PT0gXCJcdTAwRDdcIikge1xuICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICBjdXJyZW50ID0gXCJcIjtcbiAgICAgIHJlc3VsdC5wdXNoKFwiKlwiKTtcbiAgICB9IGVsc2UgaWYgKGJyYWNrZXQgPT09IDAgJiYgYyA9PT0gXCJeXCIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICByZXN1bHQucHVzaChcIl5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgKz0gYztcbiAgICB9XG4gIH1cbiAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUcmVlID0gKHRyZWVfOiBUcmVlKTogbnVtYmVyID0+IHtcbiAgY29uc3QgdHJlZSA9IHN0cnVjdHVyZWRDbG9uZSh0cmVlXyk7XG4gIGlmICh0eXBlb2YgdHJlZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodHJlZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0cmVlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cbiAgaWYgKHRyZWUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh0cmVlWzBdIGFzIHN0cmluZyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHRyZWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBpZiAodHJlZVtpXSA9PT0gXCJeXCIpIHtcbiAgICAgIGNvbnN0IGJhc2UgPSBjYWxjdWxhdGVUcmVlKHRyZWVbaSAtIDFdKTtcbiAgICAgIGNvbnN0IHBvd2VyID0gY2FsY3VsYXRlVHJlZSh0cmVlW2kgKyAxXSk7XG4gICAgICB0cmVlLnNwbGljZShpIC0gMSwgMywgYmFzZSAqKiBwb3dlcik7XG5cbiAgICAgIGkgLT0gMjtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cmVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgaWYgKHRyZWVbaV0gPT09IFwiKlwiKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gY2FsY3VsYXRlVHJlZSh0cmVlW2kgLSAxXSk7XG4gICAgICBjb25zdCByaWdodCA9IGNhbGN1bGF0ZVRyZWUodHJlZVtpICsgMV0pO1xuICAgICAgdHJlZS5zcGxpY2UoaSAtIDEsIDMsIGxlZnQgKiByaWdodCk7XG5cbiAgICAgIGkgLT0gMjtcbiAgICB9XG4gIH1cbiAgaWYgKHRyZWUubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRyZWUsICR7dHJlZX1gKTtcbiAgfVxuICBpZiAodHlwZW9mIHRyZWVbMF0gIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHJlZSwgJHt0cmVlfWApO1xuICB9XG4gIHJldHVybiB0cmVlWzBdO1xufTtcblxuY29uc3QgY29sb3JpemUgPSAoZWxlbWVudHM6IEhUTUxFbGVtZW50W10pOiBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBtYXRoID0ga2F0ZXhIdG1sVG9FeHByKGVsZW1lbnRzKTtcbiAgaWYgKG1hdGggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIW1hdGgubWF0Y2goL15bMC05XFwtXHUwMEQ3XFxeKCldKyQvKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJzZWQgPSBwYXJzZUV4cHIobWF0aCk7XG4gIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVRyZWUocGFyc2VkKTtcbiAgY29uc3QgY29sb3IgPSBnZXRDb2xvckZyb21OdW1iZXIocmVzdWx0KTtcbiAgZm9yIChjb25zdCBlIG9mIGVsZW1lbnRzKSB7XG4gICAgZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldFZhcmlhYmxlID0gKGVsZW1lbnQ6IEhUTUxTcGFuRWxlbWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb3JkXCIpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXRobm9ybWFsXCIpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudGV4dENvbnRlbnQgPz8gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChlbGVtZW50LmNoaWxkcmVuWzBdPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwibWF0aG5vcm1hbFwiKSkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID8/IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuY29uc3Qgc2VwYXJhdG9ycyA9IFtcIm1wdW5jdFwiLCBcIm1yZWxcIiwgXCJtb3BlblwiLCBcIm1jbG9zZVwiLCBcIm1vcFwiXTtcbnR5cGUgU3RhdGVtZW50ID0geyBlbGVtZW50czogSFRNTFNwYW5FbGVtZW50W107IG1heFZhbHVlOiBudW1iZXIgfTtcblxuY29uc3QgY29sb3JpemVBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnRIZWFkZXJzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImgzXCIpLFxuICApLmZpbHRlcigoZSkgPT4gZS50ZXh0Q29udGVudCA9PT0gXCJcdTUyMzZcdTdEMDRcIiB8fCBlLnRleHRDb250ZW50ID09PSBcIkNvbnN0cmFpbnRzXCIpO1xuICBmb3IgKGNvbnN0IGhlYWRlciBvZiBjb25zdHJhaW50SGVhZGVycykge1xuICAgIGNvbnN0IGNvbnN0cmFpbnRSb290ID0gaGVhZGVyLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoIWNvbnN0cmFpbnRSb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbG9yaXplU2VjdGlvbihjb25zdHJhaW50Um9vdCBhcyBIVE1MRWxlbWVudCk7XG4gIH1cbn07XG5jb25zdCBjb2xvcml6ZVNlY3Rpb24gPSAoY29uc3RyYWludFJvb3Q6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlTWF4ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcblxuICBjb25zdCBtYXRocyA9IEFycmF5LmZyb20oXG4gICAgY29uc3RyYWludFJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5rYXRleC1odG1sOm5vdChbZGF0YS1hbGMtY29sb3JpemVkXSlcIiksXG4gICk7XG4gIGZvciAoY29uc3QgbWF0aCBvZiBtYXRocykge1xuICAgIG1hdGguc2V0QXR0cmlidXRlKFwiZGF0YS1hbGMtY29sb3JpemVkXCIsIFwidHJ1ZVwiKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgIG1hdGgucXVlcnlTZWxlY3RvckFsbDxIVE1MU3BhbkVsZW1lbnQ+KFwiLmJhc2UgPiBzcGFuXCIpLFxuICAgICkuZmlsdGVyKChlKSA9PiAhIWUudGV4dENvbnRlbnQpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnRzOiBIVE1MU3BhbkVsZW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZW1lbnQ6IFN0YXRlbWVudCA9IHsgZWxlbWVudHM6IFtdLCBtYXhWYWx1ZTogMCB9O1xuICAgIGNvbnN0IGNvbG9yaXplQ3VycmVudFN0YXRlbWVudCA9ICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBjdXJyZW50U3RhdGVtZW50LmVsZW1lbnRzLmZpbHRlcigoZSkgPT4gZ2V0VmFyaWFibGUoZSkpKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gZ2V0VmFyaWFibGUoZSk7XG4gICAgICAgIGlmICghdmFyaWFibGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0eWxlLmNvbG9yID0gZ2V0Q29sb3JGcm9tTnVtYmVyKGN1cnJlbnRTdGF0ZW1lbnQubWF4VmFsdWUpO1xuICAgICAgICB2YXJpYWJsZU1heGVzW3ZhcmlhYmxlXSA9IE1hdGguYWJzKGN1cnJlbnRTdGF0ZW1lbnQubWF4VmFsdWUpO1xuICAgICAgfVxuICAgICAgY3VycmVudFN0YXRlbWVudC5lbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgY3VycmVudFN0YXRlbWVudC5tYXhWYWx1ZSA9IDA7XG4gICAgfTtcbiAgICBjb25zdCBjb2xvcml6ZUN1cnJlbnRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcml6ZShjdXJyZW50RWxlbWVudHMpO1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgTWF0aC5hYnModmFsdWUpID4gY3VycmVudFN0YXRlbWVudC5tYXhWYWx1ZSkge1xuICAgICAgICBjdXJyZW50U3RhdGVtZW50Lm1heFZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuICAgICAgfVxuICAgICAgY3VycmVudEVsZW1lbnRzLmxlbmd0aCA9IDA7XG4gICAgfTtcblxuICAgIGxldCB3aWxsQ2hlY2tTZXBhcmF0b3IgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIGVsZW1lbnRzLmVudHJpZXMoKSkge1xuICAgICAgaWYgKHdpbGxDaGVja1NlcGFyYXRvcikge1xuICAgICAgICB3aWxsQ2hlY2tTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFnZXRWYXJpYWJsZShlbGVtZW50c1tpIC0gMl0pIHx8ICFnZXRWYXJpYWJsZShlbGVtZW50KSkge1xuICAgICAgICAgIGN1cnJlbnRTdGF0ZW1lbnQuZWxlbWVudHMucG9wKCk7XG4gICAgICAgICAgY29sb3JpemVDdXJyZW50U3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1wdW5jdFwiKSkge1xuICAgICAgICB3aWxsQ2hlY2tTZXBhcmF0b3IgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLnNvbWUoKGMpID0+IHNlcGFyYXRvcnMuaW5jbHVkZXMoYykpKSB7XG4gICAgICAgIGlmIChjdXJyZW50RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbG9yaXplQ3VycmVudEVsZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGF0ZW1lbnQuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGdldFZhcmlhYmxlKGVsZW1lbnQpO1xuICAgICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZU1heGVzW3ZhcmlhYmxlXSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBnZXRDb2xvckZyb21OdW1iZXIodmFyaWFibGVNYXhlc1t2YXJpYWJsZV0pO1xuICAgICAgICAgIGlmIChjdXJyZW50U3RhdGVtZW50Lm1heFZhbHVlIDwgdmFyaWFibGVNYXhlc1t2YXJpYWJsZV0pIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZW1lbnQubWF4VmFsdWUgPSB2YXJpYWJsZU1heGVzW3ZhcmlhYmxlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICBjdXJyZW50U3RhdGVtZW50LmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29sb3JpemVDdXJyZW50RWxlbWVudCgpO1xuICAgICAgY29sb3JpemVDdXJyZW50U3RhdGVtZW50KCk7XG4gICAgfVxuICB9XG59O1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbG9yaXplQWxsKCk7XG59LCAxMDApO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7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Q2YsRUFBWXJCLEVBQVNXLEVBQUksQ0FBQyxDQUFDLEdBQUssQ0FBQ1UsRUFBWXhCLENBQU8sS0FDdkRrQyxFQUFpQixTQUFTLElBQUksRUFDOUJDLEVBQXlCLElBR3pCbkMsRUFBUSxVQUFVLFNBQVMsUUFBUSxJQUNyQ3VDLEVBQXFCLElBRW5CLE1BQU0sS0FBS3ZDLEVBQVEsU0FBUyxFQUFFLEtBQU1VLEdBQU1lLEVBQVcsU0FBU2YsQ0FBQyxDQUFDLEVBQUcsQ0FDakV1QixFQUFnQixPQUFTLEdBQzNCSSxFQUF1QixFQUd6QkgsRUFBaUIsU0FBUyxLQUFLbEMsQ0FBTyxFQUN0QyxRQUNGLENBQ0EsSUFBTW9DLEVBQVdaLEVBQVl4QixDQUFPLEVBQ2hDb0MsR0FDRUwsRUFBY0ssQ0FBUSxJQUN4QnBDLEVBQVEsTUFBTSxNQUFRc0IsRUFBbUJTLEVBQWNLLENBQVEsQ0FBQyxFQUM1REYsRUFBaUIsU0FBV0gsRUFBY0ssQ0FBUSxJQUNwREYsRUFBaUIsU0FBV0gsRUFBY0ssQ0FBUSxJQUt4REgsRUFBZ0IsS0FBS2pDLENBQU8sRUFDNUJrQyxFQUFpQixTQUFTLEtBQUtsQyxDQUFPLENBQ3hDLENBQ0lpQyxFQUFnQixPQUFTLElBQzNCSSxFQUF1QixFQUN2QkYsRUFBeUIsRUFFN0IsQ0FDRixFQUVBLFlBQVksSUFBTSxDQUNoQlQsRUFBWSxDQUNkLEVBQUcsR0FBRyIsCiAgIm5hbWVzIjogWyJicm93biIsICJncmVlbiIsICJjeWFuIiwgImJsdWUiLCAieWVsbG93IiwgIm9yYW5nZSIsICJyZWQiLCAic3BlY2lhbCIsICJnZXRDb2xvckZyb21OdW1iZXIiLCAidmFsdWUiLCAiYVZhbHVlIiwgImthdGV4SHRtbFRvRXhwciIsICJodG1sIiwgInRleHQiLCAiZWxlbWVudCIsICJkYXRhIiwgInJvb3QiLCAiZWxlbWVudHMiLCAicGFyc2VkIiwgInBhcnNlRXhwciIsICJleHByIiwgImJyYWNrZXQiLCAicmVzdWx0IiwgImN1cnJlbnQiLCAiYyIsICJjYWxjdWxhdGVUcmVlIiwgInRyZWVfIiwgInRyZWUiLCAiaSIsICJiYXNlIiwgInBvd2VyIiwgImxlZnQiLCAicmlnaHQiLCAiY29sb3JpemUiLCAibWF0aCIsICJjb2xvciIsICJnZXRDb2xvckZyb21OdW1iZXIiLCAiZSIsICJnZXRWYXJpYWJsZSIsICJzZXBhcmF0b3JzIiwgImNvbG9yaXplQWxsIiwgImNvbnN0cmFpbnRIZWFkZXJzIiwgImhlYWRlciIsICJjb25zdHJhaW50Um9vdCIsICJjb2xvcml6ZVNlY3Rpb24iLCAidmFyaWFibGVNYXhlcyIsICJtYXRocyIsICJjdXJyZW50RWxlbWVudHMiLCAiY3VycmVudFN0YXRlbWVudCIsICJjb2xvcml6ZUN1cnJlbnRTdGF0ZW1lbnQiLCAidmFyaWFibGUiLCAiY29sb3JpemVDdXJyZW50RWxlbWVudCIsICJ2YWx1ZSIsICJ3aWxsQ2hlY2tTZXBhcmF0b3IiXQp9Cg==
