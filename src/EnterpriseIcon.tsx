import { ArrowsLeftRight, Medal, MagnifyingGlass, TrendUp, UsersThree, FileArrowUp, Factory, GlobeHemisphereWest, Vault } from '@phosphor-icons/react';
const icons = [ArrowsLeftRight, Medal, MagnifyingGlass, TrendUp, UsersThree, FileArrowUp, Factory, GlobeHemisphereWest, Vault];
const colors = ['#eb931e', '#6662ed', '#0bb2cd', '#1686ef', '#8463db', '#12b69c', '#497ae1', '#159cb8', '#8570cf'];
export default function EnterpriseIcon({ index }: { index: number }) {
  const Icon = icons[index];
  return <span className="enterprise-art enterprise-symbol" style={{color:colors[index]}} aria-hidden="true" data-icon={index}><Icon size={36} weight="duotone" /></span>;
}
