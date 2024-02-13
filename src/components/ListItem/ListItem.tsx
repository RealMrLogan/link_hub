import Link from "next/link"

interface ListItemProps {
  href: string,
  label: string
}

const ListItem = ({ href, label }: ListItemProps) => {
  return (
    <Link href={href}>
      <div className="p-6 mb-2 border-solid border-2 border-neutral-700 grid place-content-center rounded-tl-xl rounded-br-xl">
        <p className="text-neutral-200">{label}</p>
      </div>
    </Link>
  )
}

export default ListItem
