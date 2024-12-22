import { Checkbox, Label } from "@medusajs/ui"
import React from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
  name?: string
  'data-testid'?: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
  name,
  'data-testid': dataTestId
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="border rounded-md p-0.5">
        <Checkbox
          className="text-base-regular flex items-center gap-x-2 h-4 w-4"
          id="checkbox"
          role="checkbox"
          type="button"
          checked={checked}
          aria-checked={checked}
          onClick={onChange}
          name={name}
          data-testid={dataTestId}
        />
      </div>
      
      <Label
        htmlFor="checkbox"
        className="!transform-none !txt-medium"
        size="large"
      >
        {label}
      </Label>
    </div>
  )
}

export default CheckboxWithLabel
