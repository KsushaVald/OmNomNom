import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import { CardList } from "./CardList";
import { Card } from "./CardList/Card";
import { Header } from "./Header";
import { Layout } from "./Layout";
import "./main.global.css";

const LIST = [{
    key: 0,
    subheader: 'с фуа-гра',
    description: '10 порций',
    special: 'мышь в подарок',
    label: '0,5',
    note: 'Печень утки разварная с артишоками.',
    disable: true,
  }, {
    key: 1,
    subheader: 'с рыбой',
    description: '40 порций',
    special: '2 мыши в подарок',
    label: '2',
    note: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disable: false,
  }, {
    key: 2,
    subheader: 'с курой',
    description: '100 порций',
    special: '5 мышей в подарок заказчик доволен',
    label: '5',
    note: 'Филе из цыплят с трюфелями в бульоне.',
    disable: false,
  }]

export function OmNomNom() {
  return (
    <Layout>
      <Header/>
      <CardList>
        {LIST.map(note => (
          <Card key={note.key} subheader={note.subheader} description={note.description} special={note.special} label={note.label} note={note.note} disable={note.disable}/>
        ))}
      </CardList>
    </Layout>
  )
}

window.addEventListener('load', ()=> {
  ReactDOM.render(<OmNomNom/>, document.getElementById('react_root'));
})

