import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import review_icon from "../assets/reviewicon.png";

const Dealers = () => {
  const [dealersList, setDealersList] = useState([]);

  const dealer_url = "https://albertocarb1-3030.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/fetchDealers";

  const get_dealers = async () => {
    try {
      const res = await fetch(dealer_url, {
        method: "GET"
      });

      const retobj = await res.json();
      console.log('Fetched data:', retobj); // Log the entire response for debugging

      if (res.ok) {
        setDealersList(retobj); // Assuming the API returns the array directly
      } else {
        console.error("Failed to fetch dealers:", retobj);
      }
    } catch (error) {
      console.error("Error fetching dealers:", error);
    }
  };

  useEffect(() => {
    get_dealers();
  }, []);

  return (
    <div>
      <Header />
      <h1>Dealers JSON:</h1>
      <pre>{JSON.stringify(dealersList, null, 2)}</pre>
      <h2>Dealers List:</h2>
      <ul>
        {dealersList.map((dealer) => (
          <li key={dealer._id}>
            <div>{dealer.full_name}</div>
            <div>{dealer.address}, {dealer.city}, {dealer.state} {dealer.zip}</div>
            <div>Latitude: {dealer.lat}, Longitude: {dealer.long}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dealers;



// Original version

// import React, { useState, useEffect } from 'react';
// import "./Dealers.css";
// import "../assets/style.css";
// import Header from '../Header/Header';
// import review_icon from "../assets/reviewicon.png"

// const Dealers = () => {
//     console.log("Test");
//   const [dealersList, setDealersList] = useState([]);
//   // let [state, setState] = useState("")
//   let [states, setStates] = useState([])

//   // let root_url = window.location.origin
//   let dealer_url ="https://albertocarb1-3030.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/fetchDealers";
  
//   let dealer_url_by_state = "https://albertocarb1-3030.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/fetchDealers";
 
//   const filterDealers = async (state) => {
//     dealer_url_by_state = dealer_url_by_state+state;
//     const res = await fetch(dealer_url_by_state, {
//       method: "GET"
//     });
//     const retobj = await res.json();
//     if(retobj.status === 200) {
//       let state_dealers = Array.from(retobj.dealers)
//       setDealersList(state_dealers)
//     }
//   }

//   const get_dealers = async ()=>{
//     const res = await fetch(dealer_url, {
//       method: "GET"
//     });
//     const retobj = await res.json();
//     if(retobj.status === 200) {
//       let all_dealers = Array.from(retobj.dealers)
//       let states = [];
//       all_dealers.forEach((dealer)=>{
//         states.push(dealer.state)
//       });

//       setStates(Array.from(new Set(states)))
//       setDealersList(all_dealers)
//     }
//   }
//   useEffect(() => {
//     get_dealers();
//   },[]);  


// let isLoggedIn = sessionStorage.getItem("username") != null ? true : false;



// return(
//   <div>
//       <Header/>

//      <table className='table'>
//       <tr>
//       <th>ID.</th>
//       <th>Dealer Name</th>
//       <th>City</th>
//       <th>Address</th>
//       <th>Zip</th>
//       <th>
//       <select name="state" id="state" onChange={(e) => filterDealers(e.target.value)}>
//       <option value="" selected disabled hidden>State</option>
//       <option value="All">All States</option>
//       {states.map(state => (
//           <option value={state}>{state}</option>
//       ))}
//       </select>        

//       </th>
//       {isLoggedIn ? (
//           <th>Review Dealer</th>
//          ):<></>
//       }
//       </tr>
//      {dealersList.map(dealer => (
//         <tr>
//           <td>{dealer['id']}</td>
//           <td><a href={'/dealer/'+dealer['id']}>{dealer['full_name']}</a></td>
//           <td>{dealer['city']}</td>
//           <td>{dealer['address']}</td>
//           <td>{dealer['zip']}</td>
//           <td>{dealer['state']}</td>
//           {isLoggedIn ? (
//             <td><a href={`/postreview/${dealer['id']}`}><img src={review_icon} className="review_icon" alt="Post Review"/></a></td>
//            ):<></>
//           }
//         </tr>
//       ))}
//      </table>
//   </div>
// )
// }

// export default Dealers
