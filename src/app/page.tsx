import { Children } from "react"
import config from './config'
import ListItem from "@/components/ListItem/ListItem"

const HomePage = () => {
  return (
    <ul>
      {Children.toArray(config.links.map(({ href, label }) => <li><ListItem href={href} label={label} /></li>))}
    </ul>
  )
}

export default HomePage
