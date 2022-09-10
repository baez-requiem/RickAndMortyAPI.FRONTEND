type Data = {
  value: string
  label: string|number
}

type ListProps = {
  data: Data[]
  value?: string
  onClick?: (arg0: string) => void
}

export default ListProps