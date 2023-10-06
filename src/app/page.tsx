'use client';

import Image from 'next/image'
import {useState} from 'react'

import styles from './page.module.css'
import {report_stats} from './report_metrics'

import tifa_img from './tifa.jpg'


export default function Home() {
    const [value,setValue]=useState({
        pee: 0,
        poop: 0,
        submitted: false
    })
    const report_pee = () => {report_stats("pee", value.pee)}
    const report_poop = () => {report_stats("poop", value.poop)}
    const report_all = () => {
        report_pee()
        report_poop()
        setValue({pee: 0, poop: 0, submitted: true})
    }


  return (
    <main className={styles.main}>

      <div>
          <div style={{maxWidth: '100vw',width: '220px', margin: '0 auto'}}>
            <Image src={tifa_img} alt="Tifa, the cat" id="tifa_img" layout="responsive"/>
          </div>
        <br/>
          <div>
              <p style={{textAlign: 'center', marginBottom: '10px'}}>
                  What did Tifa contribute today?
              </p>
              <div/>
              <div className={styles.buttons}>
                  <div className={styles.button}>
                      <button style={{backgroundColor: "indianred"}} onClick={(e)=> setValue({pee: value.pee-1, poop: value.poop, submitted: value.submitted})} >-</button>
                      <span className={styles.card}>{value.pee} pees</span>
                      <button style={{backgroundColor: "palegreen"}} onClick={(e)=> setValue({pee: value.pee+1, poop: value.poop, submitted: value.submitted})} >+</button>
                  </div>
                  <div className={styles.button}>
                      <button style={{backgroundColor: "indianred"}} onClick={(e)=> setValue({pee: value.pee, poop: value.poop-1, submitted: value.submitted})} >-</button>
                      <span className={styles.card}>{value.poop} poops</span>
                      <button style={{backgroundColor: "palegreen"}} onClick={(e)=> setValue({pee: value.pee, poop: value.poop+1, submitted: value.submitted})} >+</button>
                  </div>
                  <button className={styles.submitbutton} style={{backgroundColor: value.submitted ? "lightgreen" : "greenyellow"}} onClick={report_all} disabled={value.submitted}>{value.submitted ? "Contributions logged!" : "Submit"}</button>
              </div>
          </div>
      </div>
        <iframe width="330" height="250" frameBorder="0"
            src={process.env.TIFA_CONTRIBUTION_GRAPH_URI}
        />
            </main>
  )
}
