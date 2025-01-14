'use client';
import React from 'react'
import $ from 'jquery'

let selectedText: string = "";
const SelectTag = () => {
    console.log(selectedText);
    // let parentElem = document.getElementById("location");
    // let selectedText = parentElem.options[parentElem.selectedIndex].text;
  return (
    <div>
        <label htmlFor="location">
            <select name="location" id="location" onClick={() => {
                if (selectedText != $("#location :selected").text()) {
                    selectedText = $("#location :selected").text()
                }
                console.log(selectedText)}}>
                <option value="1">Addis Ababa</option>
                <option value="2">Adama</option>
                <option value="3">Hawassa</option>
                <option value="4">Mekele</option>
            </select>
        </label>
    </div>
  )
}
console.log(selectedText);
export default SelectTag