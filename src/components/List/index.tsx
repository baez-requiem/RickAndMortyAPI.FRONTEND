import { StyledLi, StyledUl } from "./styles"
import ListProps from "./types"

const List = ({ data = [], onClick, value }: ListProps) => (
  <div>
    <StyledUl>
      {data.map((e, i) => (
        <StyledLi
          key={i}
          onClick={() => e.value !== value && onClick?.(e.value)}
          selected={e.value === value}
        >
          {e.label}
        </StyledLi>
      ))}
    </StyledUl>
  </div>
)


export default List