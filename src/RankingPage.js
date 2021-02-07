
 

import React from 'react'
import Container from '@material-ui/core/Container';
import './RankingPage.css';

const RankingPage = () => {
  return (
    <Container maxWidth="md">
        <h1>Community Translation Leaders</h1>
        <table className="tableContainer">
            <thead>
                <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Komuniti Index</h1></th>
                    <th><h1>Fluent Popular Languages</h1></th>
                    <th><h1>Average Rating</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Bourn</td>
                    <td>9.9</td>
                    <td>6</td>
                    <td>96</td>
                </tr>
                <tr>
                    <td>Godofredo Aristizabal</td>
                    <td>9.8</td>
                    <td>4</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Théophile Plamondon</td>
                    <td>9.8</td>
                    <td>5</td>
                    <td>94</td>
                </tr>
            <tr>
                <td>Kazimir Vlasov</td>
                <td>9.7</td>
                <td>4</td>
                <td>93</td>
            </tr>
            <tr>
                    <td>Just Sayin</td>
                    <td>9.6</td>
                    <td>4</td>
                    <td>92</td>
                </tr>
            <tr>
                    <td>Po Hee-Young</td>
                    <td>9.5</td>
                    <td>3</td>
                    <td>91</td>
                </tr>
        </tbody>
    </table>
    </Container>
  )
}

export default RankingPage;
   
 