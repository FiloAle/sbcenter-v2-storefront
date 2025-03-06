import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  return (
    <div>
      <Text>
        Presto invieremo una mail di conferma a{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2 text-ui-fg-muted">
        ID Ordine <span data-testid="order-id" className="text-gold-500">#{order.display_id}</span>
      </Text>
    </div>
  )
}

export default OrderDetails
