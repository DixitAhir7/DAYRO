"use strict";
import { addanimationclass, refresh, fetchjson } from "../../../modules/functions-flie/functions.js";
addanimationclass();
fetchjson();

// purposeinaboutpage
try {
    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal'); const openPurposeModal = document.querySelector('.my-purpose'); purposeModal.addEventListener('click', (e) => {
            e.preventDefault();
            openPurposeModal.classList.toggle('active'); if (openPurposeModal.classList.contains('active')) { refresh('purposemodal', 'open'); document.body.classList.toggle('modal-open') } else { refresh('purposemodal', 'closed'); }
        });
    };
    function closeModal() { const closebtn = document.querySelector('.close-btn'); closebtn.addEventListener('click', (e) => { const openPurposeModal = document.querySelector('.my-purpose'); openPurposeModal.classList.remove('active'); refresh('purposemodal', 'closed'); }) }
    openPurposeModal();
    closeModal()
} catch (e) { console.warn('while opening modal:', e); }

// animation for weblinks where informatuve website links added
const words = ['blogs', 'articles']; const highlight = document.getElementById('dynamic-text'); let index = 0;
try {
    function updateText() { highlight.classList.remove('active'); setTimeout(() => { highlight.textContent = words[index]; highlight.classList.add('active'); index = (index + 1) % words.length; }, 300); }
    setInterval(updateText, 2500);
} catch (e) { console.log('animation error:', e); }

// adjustable height for weblinks section
try {
    function setheight() {
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.webinfo .weblink .webtags'); cards.forEach((paragraphs) => {
                paragraphs.addEventListener("mouseup", () => {
                    const selection = window.getSelection(); const selectedText = selection.toString().trim(); if (!selectedText) return; const selectedNode = selection.anchorNode; const paragraph = selectedNode && selectedNode.nodeType === 3
                        ? selectedNode.parentElement.closest('p')
                        : selectedNode.closest && selectedNode.closest('p'); if (!paragraph) return; if (!paragraph.hasSlider) {
                            const inputrange = document.createElement('input'); inputrange.className = 'setinput'; inputrange.type = 'range'; inputrange.min = '100'; inputrange.max = '200'; inputrange.value = '16'; inputrange.style.display = 'block'; inputrange.addEventListener('input', () => {
                                paragraph.style.height = inputrange.value + 'px'; localStorage.setItem('height', Number(inputrange.value)); if (!paragraph.hasSetHeightButton && !paragraph.hasresetbtn) { const createbtn = document.createElement('button'); const resetbtn = document.createElement('button'); createbtn.className = 'setheight'; createbtn.innerHTML = 'set height'; resetbtn.className = 'resetheight'; resetbtn.innerHTML = 'reset height'; paragraph.appendChild(createbtn); paragraph.appendChild(resetbtn); paragraph.hasSetHeightButton = true; paragraph.hasresetbtn = true; }
                            }); paragraph.appendChild(inputrange); paragraph.hasSlider = true;
                        }
                });
            })
        })
    }
} catch (e) { console.log('while setting height:', e); }


// loadmore content in about
function loadmorecontent() {
    try {
        const content = document.querySelectorAll('.webinfo .weblink'); const loadbtn = document.querySelector('.loadmorebtn button'); content.forEach((descriptiton, index) => {
            loadbtn.addEventListener('click', () => {
                ![0, 1, 2, 3].includes(index) ? descriptiton.classList.toggle('forload') : 'failed';
                localStorage.setItem('loadbtn', descriptiton.classList.contains('forload') ? 'removed' : 'added');
            })
        })
    } catch (e) { console.log(e); }
};

loadmorecontent();