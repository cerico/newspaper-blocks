# Newspaper Blocks


![screenshot](https://cdn-sec.droplr.net/files/acc_444775/MPaNfF?response-content-disposition=inline%3B%20filename%3DScreen%2520Shot%2520on%25202018-01-16%2520at%252020%253A17%253A44.png&Expires=1516133937&Key-Pair-Id=APKAJTEIOJM3LSMN33SA&Signature=TM4a3hu3hNRElVN07Qed~V8gWrMM8c-jnWlvLzLIClA1-ROLSyUyN8rP3goymBL74wGfmrjkB5yzq4OHfkQ0~jl-XDVWQ5~aO2FTB6H3EUHwVJ0klr4aRbABTJ8UFhDuA4TRivrVnZbfVPYqc0DHncqdSCQ9ux2vhe7QFX8Gq5Y_)


## TLDR / What is it?

Styled strip and text blocks

## How Do I use it?

### Install

```
➜  yesmate git:(dev) npm i newspaper-blocks
```

### Import

Import into your main react component

```
import Block from 'newspaper-blocks';
```

### Include

Include in your react component and pass it the text, colours and font you want for it

```
<Block data={data}/>
```

### Example data structure

```
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
```

### See example app

```
git@github.com:cerico/newspaper-blocks.git
cd newspaper-blocks/example
npm install
npm run dev
```

has server and client rendered data with different schemes