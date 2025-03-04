/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, Timestamp, Uint64, ConfigResponse, Coin, ExecuteMsg, Decimal, InstantiateMsg, CreateMinterMsgForVendingMinterInitMsgExtension, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, VendingMinterInitMsgExtension, MinterParamsForParamsExtension, ParamsExtension, MintCountResponse, MintPriceResponse, MintableNumTokensResponse, Addr, MinterConfigForConfigExtension, ConfigExtension, QueryMsg, StartTimeResponse, StatusResponse, Status } from "./VendingMinter.types";
export interface VendingMinterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  mintableNumTokens: () => Promise<MintableNumTokensResponse>;
  startTime: () => Promise<StartTimeResponse>;
  mintPrice: () => Promise<MintPriceResponse>;
  mintCount: ({
    address
  }: {
    address: string;
  }) => Promise<MintCountResponse>;
  status: () => Promise<StatusResponse>;
}
export class VendingMinterQueryClient implements VendingMinterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.mintableNumTokens = this.mintableNumTokens.bind(this);
    this.startTime = this.startTime.bind(this);
    this.mintPrice = this.mintPrice.bind(this);
    this.mintCount = this.mintCount.bind(this);
    this.status = this.status.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  mintableNumTokens = async (): Promise<MintableNumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mintable_num_tokens: {}
    });
  };
  startTime = async (): Promise<StartTimeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      start_time: {}
    });
  };
  mintPrice = async (): Promise<MintPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_price: {}
    });
  };
  mintCount = async ({
    address
  }: {
    address: string;
  }): Promise<MintCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_count: {
        address
      }
    });
  };
  status = async (): Promise<StatusResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      status: {}
    });
  };
}
export interface VendingMinterInterface extends VendingMinterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mint: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  purge: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateMintPrice: ({
    price
  }: {
    price: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateTradingStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  shuffle: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  burnRemaining: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class VendingMinterClient extends VendingMinterQueryClient implements VendingMinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.purge = this.purge.bind(this);
    this.updateMintPrice = this.updateMintPrice.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateTradingStartTime = this.updateTradingStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.burnRemaining = this.burnRemaining.bind(this);
  }

  mint = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {}
    }, fee, memo, funds);
  };
  setWhitelist = async ({
    whitelist
  }: {
    whitelist: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_whitelist: {
        whitelist
      }
    }, fee, memo, funds);
  };
  purge = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      purge: {}
    }, fee, memo, funds);
  };
  updateMintPrice = async ({
    price
  }: {
    price: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_mint_price: {
        price
      }
    }, fee, memo, funds);
  };
  updateStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee, memo, funds);
  };
  updateTradingStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_trading_start_time: {}
    }, fee, memo, funds);
  };
  updatePerAddressLimit = async ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {
        per_address_limit: perAddressLimit
      }
    }, fee, memo, funds);
  };
  mintTo = async ({
    recipient
  }: {
    recipient: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_to: {
        recipient
      }
    }, fee, memo, funds);
  };
  mintFor = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_for: {
        recipient,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  shuffle = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      shuffle: {}
    }, fee, memo, funds);
  };
  burnRemaining = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn_remaining: {}
    }, fee, memo, funds);
  };
}