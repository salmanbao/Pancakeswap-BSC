import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 0,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.cake,
  //   contractAddress: {
  //     97: '0x8a2b13546C5ec3a4bd8fb3FB1044de2A8da3b0f2',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.AUTO,
  //   harvest: true,
  //   tokenPerBlock: '100',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 2,
    stakingToken: serializedTokens.link,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xC2cB23FFD94344a1a90BE435beE2AcFcb291e0de',
      56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
    },
    poolCategory: PoolCategory.AUTO,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '100',
  },
]

export default pools
