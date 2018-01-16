import React from 'react';
import { connect } from 'react-redux';
import Block from 'newspaper-blocks';

class Main extends React.Component  {

  render (){
    const localData = {
      "items": [
        {
          "id": 1,
          "headline": "Caersk",
          "text": "There has been a ground at Bower Fold since 1906. The current main stand was built in 1996, with the covered stand at the Town End (Joe Jackson Stand) dating from 1994. The main stand, replaced a wooden one dating from 1909, which held 500 fans, before being converted to tip-up seating with a reduced capacity of around 400 personse"
        }, {
          "id": 2,
          "built": 1996,
          "headline": "Parnu",
          "text": "The club play at Holt House, which was previously the home ground of Colne Dynamoes.[5] The ground was originally an area with several pitches, before being enclosed in 1975 when Dynamoes joined the Lancashire Combination, although it continued to be used for cricket.[5] Between 1982 and 1985 three stands were erected and floodlights installed."
     
        }, {
          "id": 3,
          "built": 2012,
          "headline": "Hadley",
          "text": "The Lord Pendry Stand opened in 2004, replacing a covered terrace dating from the 1950s. The Mottram End cover stems from construction starting in the 1970s and finishing in the mid '80s."
        },
        {
          "id": 4,
          "built": 1996,
          "headline": "Hexham",
          "text": "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995"
     
        }, {
          "id": 5,
          "built": 2012,
          "headline": "Ounzlada",
          "text": "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995"
        }, {
          "id": 6,
          "built": 2012,
          "headline": "Tromvik",
          "text": "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995"
        },
        {
          "id": 7,
          "built": 1996,
          "headline": "Poa",
          "text": "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995"
     
        }, {
          "id": 8,
          "built": 2012,
          "headline": "Rendlebury",
          "text": "Another new stand was built in 1986.[5] When Dynamoes folded, the ground was used by the Colne Royal British Legion football club until they folded in 1995"
        }
      ],
      "fonts":{
        "headline":"Playfair Display SC, serif",
        "text": "raleway"
      },
      "top":{
        "headline": "Our Products",
        "text": "More information about our themes and ranges are detailed below"
      },
      "colours": {
        "bg":"#417180",
        "fg":"rgb(244, 239, 222)"
      },
      "sectionTitle":"Bespoke"
    }
    const data =  this.props.data
    if (data.items){
      return(
        <div>
        <Block data={data}/>
        <Block data={localData}/>
        <Block data={data}/>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => {
  return ({
      data: state.data,
    })
}

export default connect(mapStateToProps, null )(Main);
