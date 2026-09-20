/** Individually illustrated service icons, sharing the category icon material. */
export default function EnterpriseIcon({ index }: { index: number }) {
  return <img className="enterprise-art enterprise-illustration" src={`${import.meta.env.BASE_URL}images/enterprise-${index}.webp`} alt="" width="68" height="68" data-icon={index} />;
}
