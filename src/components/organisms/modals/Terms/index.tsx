import React, { useState } from "react";
import { Icon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Heading,
  Input,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  AspectRatio,
} from "@chakra-ui/react";

export const Privacy = (props: any) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader>Privacy</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="5">
          <Text>
            <strong>Responsible Authority</strong>
            <br />
            We are happy about you visiting our website. We would like to
            introduce you to the responsible authority in terms of data
            protection law as applicable:
            <br />
            <br />
            Christian Aichner
            <br />
            Emailwerkstraße 29
            <br />
            9523 Villach
            <br />
            Phone: +4368120502754
            <br />
            E-mail: legal@aichner-christian.com
            <br />
            <br />
            <strong>General Information</strong>
            <br />
            Pursuant to our statutory obligations, we would like to inform you
            about the collection and use of your personal data.
            <br />
            <br />
            When you use our website, personal data about you will be collected.
            This may happen by you entering the data yourself, for example your
            e-mail address. But our system also collects your data
            automatically, for example whenever you visit our website. This
            happens irrespective of the device or the software that you use to
            visit our website.
            <br />
            All data that you enter in our app is provided voluntarily; there
            are no disadvantages to you if you do not provide data. But without
            certain data, we are unable to provide services or to conclude
            contracts. Whenever such information is necessary, we will point it
            out to you.
            <br />
            On this website, the user’s personal data is only collected within
            the framework of the existing data-protection law, in particular the
            General Data Protection Regulation (GDPR). The legal terms used in
            the text are defined in Art. 4 of the GDPR.
            <br />
            The GDPR allows data processing in three cases in particular:
            <br />
            in accordance with Art. 6 para. 1 (a) and 7 GDPR, when you have
            consented to us processing your data; in this Privacy Policy and in
            the cases of consent pursuant to Art. 4 no. 11 GDPR, we will inform
            you in detail and each time for what purposes and under what
            circumstances your data will be processed by us; in accordance with
            Art. 6 para. 1 (b) GDPR, when processing your personal data is
            necessary for negotiating, concluding or performing a contract; in
            accordance with Art. 6 para. 1 (f) GDPR, if the balancing of
            interests leads to the conclusion that the processing is necessary
            to protect our legitimate interests; this means in particular our
            interests to analyse, optimise and secure the offers on our website
            – meaning primarily the analysis of user behaviour, setting up
            profiles for advertisement purposes and storage of access data as
            well as the use of third-party providers. Inventory Data
            <br />
            We collect inventory data as far as it is necessary to establish,
            negotiate or amend a contract (including one without remuneration)
            between us and the user. This can be: customer data (for example
            name, address), contact data (for example e-mail address, phone
            number), service data (for example services ordered, duration,
            payment). Upon establishing the user relationship, we will ask you
            for this data (for example name, address and e-mail address) and
            will also tell you which of the information is required to establish
            the user relationship.
            <br />
            Usage Data
            <br />
            We also collect usage data to allow users to use the services on our
            website. These may consist of: usage information (for example
            visited websites or parts, duration of visit, interest in services),
            content data (for example data, text, images, sounds, videos entered
            or uploaded by you), meta data (for example identity of your device,
            location, IP address).
            <br />
            We will only combine usage data if and insofar as it is necessary
            for billing purposes. Otherwise, we will only put together usage
            data pseudonymously and only insofar as you have not objected. You
            may send this objection to the address indicated in the “About Us”
            section or the responsible authority indicated in this Privacy
            Policy at any time.
            <br />
            The legal basis for this data processing are our legitimate
            interests pursuant to Art. 6 para. 1 (f) GDPR in analysing the
            website and your use, possibly also the statutory permission to
            store data as part of the negotiation of a contract pursuant to Art.
            6 para. 1 (b) GDPR.
            <br />
            First Contact through Electronic Request
            <br />
            If you contact us in electronic form (for example by mail, fax,
            phone, messenger, etc.), we store and process the data which you
            have given us (for example name, contact information, content of the
            request). This is based on our legitimate interest in an effective
            communication with customers in accordance with Article 6 para. 1
            (a) GDPR and, as far as it concerns a request to enter into or to
            perform a contract, also with Article 6 para. 1 (b) GDPR. We will
            only pass on this data to third parties as far as required for the
            performance of the contract (in accordance with Article 6 para. 1
            (b) GDPR), by the overwhelming interest in effective services (in
            accordance with Article 6 para. 1 (f) GDPR) or based on your consent
            (in accordance with Article 6 para. 1 (a) GDPR) or if there is
            another legal permission or obligation. You may ask us at any time
            and without any cost to provide information about the purpose of the
            processing, the origin and the recipient, if any, of your data. You
            may also request that we correct, delete or limit the processing of
            your personal data. You may object against the (further) processing
            of your data at any time and you have a right for the data to be
            made transferable as well as the right to file a complaint with the
            competent supervisory agency. In general, your data will only remain
            stored as long as required by the purpose of the respective data
            processing. A longer storage is an option, in particular when
            required in order to pursue our rights, for other legitimate
            interests of ours or when there is a statutory duty to keep the data
            longer (for example record-keeping under tax law, statute of
            limitations).
            <br />
            Consent
            <br />
            Whenever we ask you for your consent for the processing of your
            data, we will inform you in clear language and in an easily
            accessible way about the cases for which you will be granting your
            consent. Any consent that we ask you for is voluntary. Any advantage
            that you wish to gain by granting consent is also available without
            consent; simply ask us.
            <br />
            Regarding any consent, you have the right to revoke any consent
            given to us for the processing of your personal data at any time.
            You just need to contact us without any particular formal
            requirement, for example through our contact form, an e-mail to the
            e-mail address indicated in the “About Us” section or a link to
            unsubscribe (if offered by us). Your withdrawal has no effect on the
            legality of the data processing carried out up to that point.
            <br />
            Storage Period
            <br />
            Generally, your data will only remain stored as long as required by
            the purpose of the respective data processing. Storage beyond that
            is possible in particular if it is still required for pursuing our
            rights or for other legitimate interests of ours. For your inventory
            data which were necessary to perform a contract (including one
            without remuneration), this means that we store this data until the
            complete performance or termination of the contractual relationship
            plus the limitation period (which is generally 2 or 3 years) plus an
            adequate extra time for potential interruptions of the limitation
            period. For your usage data which was collected in the course of
            your use of the website, this means that we will store it only for
            the time still required for the proper functionality of our website
            and as long as we still have a legitimate interest. Statistical
            information will be primarily stored by us in pseudonymous form.
            Beyond that, we still store your data for as long as we are required
            to do so by law. This concerns in particular the tax-law
            requirements to keep records, usually for 6 or even 10 years.
            <br />
            Cookies
            <br />
            Essential Cookies
            <br />
            Based on our legitimate interest in a flawlessly functioning online
            offer and its economic and efficient design and optimization
            according to Article 6 para. 1 (f) GDPR, our website uses cookies
            and where required technologies with a similar target bearing, like
            pixel, web-beacons or tags, in order to allow you to use our offer
            better, more effectively and in a more secure way. Cookies are text
            files that are stored on your computer and which store certain data
            about your user behavior on our page. These can be “session
            cookies”, which are automatically deleted when you leave our
            website. Other cookies are stored on your computer permanently until
            you delete them. That allows us to recognize your browser when you
            visit our website again and to provide you with features or offers
            according to your previous usage. Our website only uses cookies
            which are necessary for the use of our website and in particular no
            external tracking or advertising cookies.
            <br />
            Your browser allows you to prevent the use of cookies in general or
            in specific cases. Please check the instructions for your browser to
            find out more about this. You can also delete cookies following
            these instructions which we have listed for you:
            <br />
            for Chrome:
            https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en
            <br />
            for Safari:
            https://support.apple.com/en-gb/guide/safari/sfri11471/mac
            <br />
            for Firefox:
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
            <br />
            for Edge:
            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
            <br />
            for Internet Explorer:
            https://support.microsoft.com/en-gb/help/278835/how-to-delete-cookie-files-in-internet-explorer
            <br />
            <br />
            Blocking cookies may limit the functionality of our website and of
            other websites visited by you.
            <br />
            More information on this topic, in particular how you can
            administer, limit or completely disable third-party cookies and
            technologies with a similar purpose, can be found at:
            <br />
            https://www.aboutads.info/choices
            <br />
            https://www.youronlinechoices.eu
            <br />
            https://www.networkadvertising.org/choices
            <br />
            <br />
            Users‘ Rights
            <br />
            You may request us anytime to provide information about the personal
            data stored about you free of charge. To avoid misuse, this will
            require personal identification.
            <br />
            <br />
            Deletion, Correction, Limitation
            <br />
            You may at any time demand from us that we correct (or complete)
            incorrect data as well as a limitation of the processing of data or
            deletion of your data. This applies in particular if the reason for
            processing the data is no longer valid, if a required consent has
            been revoked and there is no other legal basis or if our data
            processing is unlawful. We will then correct, block or even delete
            your personal data without delay as far as permitted by law.
            <br />
            Objection
            <br />
            The right to object to advertisement is governed by our text
            regarding consent:
            <br />
            Regarding any consent, you have the right to revoke any consent
            given to us for the processing of your personal data at any time.
            You just need to contact us without any particular formal
            requirement, for example through our contact form, an e-mail to the
            e-mail address indicated in the “About Us” section or a link to
            unsubscribe (if offered by us). Your withdrawal has no effect on the
            legality of the data processing carried out up to that point.
            <br />
            Data Transfer
            <br />
            You may request us to transfer the data stored about you in
            machine-readable form.
            <br />
            <br />
            Complaint
            <br />
            If you feel that our data processing has violated any of your
            rights, you may file a complaint with the competent regulatory
            agency (here you find a list of the agencies).
            <br />
            Changes to the Privacy Policy
            <br />
            If and when factual or legal reasons will compel us to amend the
            Privacy Policy, we will update this page accordingly. This will not
            change the consent provided by the user.
            <br />
            Website Analysis
            <br />
            hotjar
            <br />
            Based on our legitimate interest in a technologically perfect online
            offering and its design and optimisation in an economically
            efficient manner pursuant to Art. 6 para. 1 (f) GDPR, on some of our
            websites, we use the web analysis service Hotjar, provided by Hotjar
            Ltd, Dragonara Business Centre, 5th Floor, Dragonara Road, Paceville
            St Julian’s STJ 3141, Malta, Europe, +1 (855) 464-6788.
            david@hotjar.com.
            <br />
            This tool captures movements on observed websites in so-called heat
            maps. This allows us to learn in anonymised form where visitors
            click and how far they scroll. That way, we can design our website
            better and in a more customer-friendly way.
            <br />
            Protecting your personal data is very important to us when using
            this tool. All data will be collected without us being able to
            attribute it to specific users. We can only see how the mouse has
            been moved, where clicks were made and how far users have scrolled.
            Other information collected is the screen size of your device, the
            type of device, information about your browser, the country of
            access and the preferred language. If a website shows your personal
            data or that of third parties, it will be automatically shielded by
            Hotjar. We are not able to learn anything about it.
            <br />
            With a “do-not-track header”, you can prevent the use of the Hotjar
            tool. In that case, no data will be collected about your visit to
            our website. You have to set the preferences in your browser
            accordingly. Instructions in German can be found at
            http://www.akademie.de/wissen/do-not-track-datenschutz. You can also
            deactivate the Hotjar tool by using the opt-out button at
            https://www.hotjar.com/privacy/do-not-track/.
            <br />
            Further information about Hotjar Ltd. and about the Hotjar tool can
            be found at https://www.hotjar.com . The privacy policy of Hotjar
            Ltd. can be found at https://www.hotjar.com/privacy/
            <br />
            For the general approach to cookies and their deactivation as well
            as regarding the passing of data to third parties, particularly to
            the USA, we refer you to our general information in this Privacy
            Policy.
            <br />
            Cloud Storagesolutions
            <br />
            Amazon Web Services
            <br />
            Based on our legitimate interest in a flawlessly functioning online
            offer and its economic and efficient design and optimization
            according to Article 6 para. 1 (f) GDPR, our service is run on
            servers of Amazon Webservices, an offer provided by Amazon Web
            Services Inc., 410 Terry Avenue North, Seattle WA 98109, USA.
            <br />
            You will find more information about the data protection rules of
            Amazon in the Amazon white paper on the GDPR at
            https://aws.amazon.com/de/privacy/?nc1=f_pr. We have also entered
            into a contract on data processing with Amazon.
            <br />
            By using Amazon’s servers for hosting data, Amazon will learn of all
            the data entered on our end. According to the agreed contract on
            data processing and the Amazon white paper on data protection,
            Amazon will not analyze or use this data.
            <br />
            <br />
            This is our current valid privacy policy from 22.12.2022
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
