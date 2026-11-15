import React from 'react';
import { TICKER_TEXT } from '../content';

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track" id="tickerTrack">
        <span>{TICKER_TEXT}</span>
        <span>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
