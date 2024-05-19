"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
import { StreamSfuClient } from "@stream-io/video-react-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User is not logged in");
  if (!apiKey) throw new Error("No Api key");
  if (!apiSecret) throw new Error("No Api Secret");

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = client.createToken(user.id, exp, issued);

  return token;
};

// <script src="https://cdn.jsdelivr.net/npm/@finsweet/cms-library@1/cms-library.js"></script>

// <script>
// (function() {
//   const companyCollection = new FsLibrary('.company-collection-list')

// const filters = [
//   {
//     filterWrapper: ".existence-filter-wrapper",
//     filterType: "exclusive"
//   },
// {
//     filterWrapper: ".industry-filter-wrapper",
//     filterType: "exclusive"
//   },
// ]

//   companyCollection.filter({
//     filterArray: filters,
//     activeClass: 'company-filter-active',
//     emptyMessage: '.empty-message',
//     animation: {
//       enable: true,
//       duration: 200,
//       easing: 'ease-out',
//       effects: 'fade translate(0px,20px)'
//     }

//   })
// })();

// //Initial filter function - ensures active states
// (function() {
// 	const defaultFilters = document.querySelectorAll('.default-company-filter')
//   defaultFilters.forEach(element => element.click())
// })();

// //Function to remove purple bg from the 'Exits' companies
// (function() {
// let companies = document.querySelectorAll('.company-active')
// 	Array.from(companies).forEach((company, i) => {
//     if(company.innerHTML.toLowerCase() === 'full exits') {
//     let parentDiv = company.parentElement
//     parentDiv.style.backgroundColor = '#D9D9D9'

//     //let companyLogo = parentDiv.getElementsByTagName('img')[0]
//     //Exits company logo should be grey
//     //companyLogo.classList.add('grey-img');
//   }

//   if(company.innerHTML.toLowerCase() === 'partial exits') {
//     let parentDiv = company.parentElement
//     parentDiv.style.backgroundColor = '#AA39E3'

//   }

// });
// })()

// </script>

// <script>
// document.addEventListener("DOMContentLoaded", function() {
//   const toggleButtons = document.querySelectorAll(".toggle-button");

//   toggleButtons.forEach(toggleButton => {
//     toggleButton.addEventListener("click", function() {
//       const detailContent = this.nextElementSibling;
//       const gridItem = this.closest(".portco-collection-item");
//       const gridHeight = gridItem.offsetHeight;
//       const gridGap = parseInt(window.getComputedStyle(gridItem).marginBottom);

//       detailContent.style.top = `${gridHeight + gridGap}px`;
//     });
//   });
// });
// </script>

// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

// <style>
// .industry-filter-select {
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     text-indent: 1px;
//     text-overflow: '';
// }

// .grey-img {
//   filter: contrast(0.1);
//   -webkit-filter: contrast(0.1);
//   filter: contrast(0.1);
// }
// </style>
