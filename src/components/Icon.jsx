import { useId } from 'react'
import clsx from 'clsx'

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { OverviewIcon } from '@/components/icons/OverviewIcon'
import { QuickstartIcon } from '@/components/icons/QuickstartIcon'
import { DeployIcon } from '@/components/icons/DeployIcon'
import { ProtocolIcon } from '@/components/icons/ProtocolIcon'
import { TestIcon } from '@/components/icons/TestIcon'
import { ContractIcon } from '@/components/icons/ContractIcon'
import { TokenIcon } from '@/components/icons/TokenIcon'
import { NftIcon } from '@/components/icons/NftIcon'
import { MarketplaceIcon } from '@/components/icons/MarketplaceIcon'
import { UnityIcon } from '@/components/icons/UnityIcon'
import { GameIcon } from '@/components/icons/GameIcon'
import { DappIcon } from '@/components/icons/DappIcon'
import { TaquitoIcon } from '@/components/icons/TaquitoIcon'
import { IndexerIcon } from '@/components/icons/IndexerIcon'
import { WalletIcon } from '@/components/icons/WalletIcon'
import { FrameworkIcon } from '@/components/icons/FrameworkIcon'


const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  overview: OverviewIcon,
  quickstart: QuickstartIcon,
  deploy: DeployIcon,
  protocol: ProtocolIcon,
  test: TestIcon,
  contract: ContractIcon,
  token: TokenIcon,
  nft: NftIcon,
  marketplace: MarketplaceIcon,
  unity: UnityIcon,
  game: GameIcon,
  dapp: DappIcon,
  taquito: TaquitoIcon,
  indexer: IndexerIcon,
  wallet: WalletIcon,
  framework: FrameworkIcon,
}

const iconStyles = {
  blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
  amber:
    '[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
}

export function Icon({ color = 'blue', icon, className, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  )
}

const gradients = {
  blue: [
    { stopColor: '#408DFF' },
    { stopColor: '#7CB3FF', offset: '.527' },
    { stopColor: '#BEDFFF', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
}

export function Gradient({ color = 'blue', ...props }) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  )
}

export function LightMode({ className, ...props }) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
