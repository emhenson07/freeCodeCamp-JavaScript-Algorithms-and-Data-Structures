function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
    let currencyUnits = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    };
    let change = [];
    if (cidTotal < changeDue) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    } else if (cidTotal === changeDue) {
      return {status: 'CLOSED', change: [...cid]};
    }
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyValue = currencyUnits[currencyName];
      let currencyCount = cid[i][1] / currencyValue;
      let currencyExchange = 0;
      while (changeDue >= currencyValue && currencyCount > 0) {
        changeDue -= currencyValue;
        currencyCount--;
        currencyExchange++;
        changeDue = Math.round(changeDue * 100) / 100;
      }
      if (currencyExchange > 0) {
        change.push([currencyName, currencyExchange * currencyValue]);
      }
    }
    if (changeDue > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
    return {status: 'OPEN', change: change};
  }