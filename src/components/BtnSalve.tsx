interface BtnSalveProps {
  onChange?: () => void
  onClick: () => void
}

export default function BtnSalve(props: BtnSalveProps) {
  return (
    <button
      type="button"
      className="btn shadow-sm border btn-success btn-sm"
      onClick={props.onClick}
      onChange={props.onChange}
    >
      <i className="bi bi-check-circle-fill"></i>
    </button>
  )
}
