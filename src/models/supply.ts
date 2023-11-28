export type Supply = {
  [chainName: string]: {
    [zap: string]: {
      [tokenName: string]: Token;
    },
  }
}

export type Token = {
  address: string;
  icon: any;
  apy: number;
  balance: number;
}