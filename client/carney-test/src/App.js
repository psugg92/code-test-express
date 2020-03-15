import React, {useState, useEffect} from 'react';
import './App.css';
import Member from './Member';
import Price from './Price';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'http://localhost:4000/members';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [platinumMembers, setPlatinumMembers] = useState([]);
  const [goldMembers, setGoldMembers] = useState([]);
  const [silverMembers, setSilverMembers] = useState([]);

  useEffect(() => {
    fetch(API)
        .then(response => response.json())
        .then(jsonResponse => {
          setMembers(jsonResponse.data);
          setLoading(false);
        });
    fetch(API + '/3')
        .then(response => response.json())
        .then(jsonResponse => {
            setPlatinumMembers(jsonResponse.data);
        })
    fetch(API + '/2')
        .then(response => response.json())
        .then(jsonResponse => {
            setGoldMembers(jsonResponse.data);
        });
    fetch(API + '/1')
        .then(response => response.json())
        .then(jsonResponse => {
            setSilverMembers(jsonResponse.data);
        });
  }, []);

  const findAverage = (members) => {
      let total = 0;
      for (let i = 0; i < members.length; i++) {
          total += members[i].subscription.price
      }
      return ((total/members.length).toFixed(2));
  };

  return (
      <div className="App">
          <div className="d-inline-flex flex-wrap">
          {loading ? (
              <span>loading...</span>
          ) : (
               <>
                   <div className={"flex-column text-center"}>
                       <Member person={platinumMembers} sub={'Platinum'} price={"$99"}/>
                   </div>
                   <div className={"flex-column text-center"}>
                       <Member person={goldMembers} sub={'Gold'} price={"$75"}/>
                   </div>
                   <div className={"flex-column text-center"}>
                       <Member person={silverMembers} sub={'Silver'} price={"$50"}/>
                   </div>
               </>
          )}
          </div>
          <div className={"justify-content-lg-center"}>
            <Price cost={findAverage(members)}/>
          </div>
      </div>
  );
}

export default App;
