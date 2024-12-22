import { Metadata } from "next"

import { Text } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "Privacy Policy | SB Center",
  description: "Leggi la nostra Privacy Policy",
}

export default async function About() {
  return (
    <>
      <div className="py-4">
        <ul className="flex flex-col gap-x-6">
          <div className="px-6">
            <div className="flex justify-between mb-4">
              <Text className="text-2xl font-serif">Privacy Policy</Text>
            </div>
            <div>
              <Text>
                Last updated: 10/12/2024 <br/>
                Effective date: 10/12/2024 <br/><br/>

                This Privacy Policy describes the policies of BEAUTY CENTER SIMONA DI BIONDA SIMONA, Via L. Comoli, 38, VB 28887, Italy, email: servizioclienti@sbcenter.it, phone: (+39)0323641369 on the collection, use and disclosure of your information that we collect when you use our website (https://www.sbcenter.it), the “Service”. By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service. <br/><br/>

                We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page. <br/><br/>

                <span className="font-semibold">INFORMATION WE COLLECT</span> <br/>

                We will collect and process the following personal information about you:<br/>

                • Name <br/>
                • Email <br/>
                • Phone number <br/>
                • Address <br/><br/>


                <span className="font-semibold">HOW WE USE YOUR INFORMATION</span> <br/>

                We will use the information that we collect about you for the following purposes:<br/>

                • Creating user account <br/>
                • Processing payment <br/>
                • Manage customer order <br/>
                • Manage user account <br/><br/>

                If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law. <br/><br/>

                <span className="font-semibold">RETENTION OF YOUR INFORMATION</span> <br/>

                We will retain your personal information with us for 90 days to 2 years after users terminate their accounts or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely. <br/><br/>

                <span className="font-semibold">YOUR RIGHTS</span> <br/>

                Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at servizioclienti@sbcenter.it. We will respond to your request in accordance with applicable law. <br/>

                Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought. <br/><br/>

                <span className="font-semibold">COOKIES</span> <br/>

                The Service only uses strictly necessary cookies in order to guarantee the correct functioning of it. <br/><br/>

                <span className="font-semibold">SECURITY</span> <br/>

                The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk. <br/><br/>

                <span className="font-semibold">THIRD PARTY LINKS & USE OF YOUR INFORMATION</span> <br/>

                Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services. <br/><br/>

                <span className="font-semibold">GRIEVANCE / DATA PROTECTION OFFICER</span> <br/>

                If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at BEAUTY CENTER SIMONA DI BIONDA SIMONA, Via L. Comoli, 38, email: servizioclienti@sbcenter.it. We will address your concerns in accordance with applicable law.
              </Text>
            </div>
          </div>
        </ul>
      </div>
    </>
  )
}
