import { BigNumber } from '@ijstech/eth-wallet';
import { moment } from '@ijstech/components';

export enum SITE_ENV {
  DEV = 'dev',
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
}

export const explorerTxUrlsByChainId: { [key: number]: string } = {
  1: 'https://etherscan.io/tx/',
  4: 'https://rinkeby.etherscan.io/tx/',
  42: 'https://kovan.etherscan.io/tx/',
  56: 'https://bscscan.com/tx/',
  97: 'https://testnet.bscscan.com/tx/',
  43113: 'https://testnet.snowtrace.io/tx/',
  43114: 'https://snowtrace.io/tx/',
  137: 'https://polygonscan.com/tx/',
  80001: 'https://mumbai.polygonscan.com/tx/',
  250: 'https://ftmscan.com/tx/',
  4002: 'https://testnet.ftmscan.com/tx/',
  13370: 'https://aminoxtestnet.blockscout.alphacarbon.network/tx/',
  421613: 'https://goerli.arbiscan.io/tx/'
}

export const DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
export const DefaultDateFormat = 'DD/MM/YYYY';

export const formatDate = (date: any, customType?: string, showTimezone?: boolean) => {
  const formatType = customType || DefaultDateFormat;
  const formatted = moment(date).format(formatType);
  if (showTimezone) {
    return `${formatted} (UTC+${moment().utcOffset() / 60})`;
  }
  return formatted;
}

export const formatUTCDate = (date: any, customType?: string, showTimezone?: boolean) => {
  const formatType = customType || DefaultDateFormat;
  const formatted = moment(date).utc().format(formatType);
  return showTimezone ? `${formatted} (UTC)` : formatted;
}

export const compareDate = (fromDate: any, toDate?: any) => {
  if (!toDate) {
    toDate = moment();
  }
  return moment(fromDate).isSameOrBefore(toDate);
}

export const formatNumber = (value: any, decimals?: number) => {
  let val = value;
  const minValue = '0.0000001';
  if (typeof value === 'string') {
    val = new BigNumber(value).toNumber();
  } else if (typeof value === 'object') {
    val = value.toNumber();
  }
  if (val != 0 && new BigNumber(val).lt(minValue)) {
    return `<${minValue}`;
  }
  return formatNumberWithSeparators(val, decimals || 4);
};

export const formatPercentNumber = (value: any, decimals?: number) => {
  let val = value;
  if (typeof value === 'string') {
    val = new BigNumber(value).toNumber();
  } else if (typeof value === 'object') {
    val = value.toNumber();
  }
  return formatNumberWithSeparators(val, decimals || 2);
};

export const formatNumberWithSeparators = (value: number, precision?: number) => {
  if (!value) value = 0;
  if (precision) {
    let outputStr = '';
    if (value >= 1) {
      outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
    }
    else {
      outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
    }

    if (outputStr.length > 18) {
      outputStr = outputStr.substr(0, 18) + '...'
    }
    return outputStr;
  }
  return value.toLocaleString('en-US');
}

export const isValidNumber = (value: string | number) => {
  const val = new BigNumber(value);
  return val.gte(0);
}

export const isInvalidInput = (val: any) => {
  const value = new BigNumber(val);
  if (value.lt(0)) return true;
  return (val || '').toString().substring(0, 2) === '00' || val === '-';
};

export const limitInputNumber = (input: any, decimals?: number) => {
  const amount = input.value;
  if (isInvalidInput(amount)) {
    input.value = '0';
    return;
  }
  if (!new BigNumber(amount).isNaN()) {
    input.value = limitDecimals(amount, decimals || 18);
  }
}

export const limitDecimals = (value: any, decimals: number) => {
  let val = value;
  if (typeof value !== 'string') {
    val = val.toString();
  }
  let chart;
  if (val.includes('.')) {
    chart = '.';
  } else if (val.includes(',')) {
    chart = ',';
  } else {
    return value;
  }
  const parts = val.split(chart);
  let decimalsPart = parts[1];
  if (decimalsPart && decimalsPart.length > decimals) {
    parts[1] = decimalsPart.substr(0, decimals);
  }
  return parts.join(chart);
}

export const toWeiInv = (n: string, unit?: number) => {
  if (new BigNumber(n).eq(0)) return new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  return new BigNumber('1').shiftedBy((unit || 18) * 2).idiv(new BigNumber(n).shiftedBy(unit || 18));
}

export const padLeft = function (string: string, chars: number, sign?: string) {
  return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
}

export const numberToBytes32 = (value: any, prefix?: string) => {
  if (!value) return;
  let v = value;
  if (typeof value == "number") {
    // covert to a hex string
    v = value.toString(16);
  } else if (/^[0-9]*$/.test(value)) {
    // assuming value to be a decimal number, value could be a hex
    v = new BigNumber(value).toString(16);
  } else if (/^(0x)?[0-9A-Fa-f]*$/.test(value)) {
    // value already a hex
    v = value;
  } else if (BigNumber.isBigNumber(value)) {
    v = value.toString(16);
  }
  v = v.replace("0x", "");
  v = padLeft(v, 64);
  if (prefix)
    v = '0x' + v
  return v;
}

export const viewOnExplorerByTxHash = (chainId: number, txHash: string) => {
  if (explorerTxUrlsByChainId[chainId]) {
    let url = `${explorerTxUrlsByChainId[chainId]}${txHash}`;
    window.open(url);
  }
}

export function isWalletAddress(address: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}