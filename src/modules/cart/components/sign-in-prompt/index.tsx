import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { PillButton } from "@modules/common/components/pill-button"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Hai già un account?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Accedi per un&apos;esperienza migliore.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <PillButton variant="secondary_border" className="h-10">
            Accedi
          </PillButton>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
