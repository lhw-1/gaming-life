import React from 'react';
import { Accordion } from 'react-bootstrap';

import ex_panop from '../../../assets/ex_panop.png';
import ex_toc from '../../../assets/ex_toc.png';
import ex_wendy from '../../../assets/ex_wendy.png';

import '../../styles.css';

const ExplanationAccordion = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Rationale and Critique behind the ideation</Accordion.Header>
                <Accordion.Body>
                    <p>The initial ideation of this project was when, during a consultation with Ms Cera, 
                        the idea of <strong>Corruption</strong> was brought up and discussed. <strong>Corruption </strong> 
                        suggests an internal decay or degradation of something that is, or was, generally 
                        regarded as <em>good</em>. While pondering on how this concept extends to our daily lives, 
                        I arrived at the concept of <em>self-help</em>, or <em>self-improvement</em>. 
                    </p>
                    <p>The topic of <em>self-improvement</em> always did seem somewhat contradictory to me. 
                        If you take a look at the vast amount of self-help media such as books, guides, videos, 
                        etc. that are readily available to us both physically and digitally (but especially 
                        digitally), they mostly consist of other people telling us how to improve ourselves. 
                        They essentially suggest that they know how to cater to our well-being - even better than 
                        ourselves. Is that not a contradiction, or at least an oddity? That someone else knows 
                        more about how to facilitate <em>self-help</em> for yourself... more than you?
                    </p>
                    <p>From there, I started to examine the question of "Why then?" - if these self-improvement 
                        advices are from other people, why do people still accept these advices, to a point where 
                        some theories have garnered cult-like followings? Is it simply Placebo effect, or is it 
                        something more than that?
                    </p>
                    <p>For my UTC2113 Project, what I wanted to examine and critique was a subset of this problem.
                        Over the last few decades, the internet has exponentially become a medium in which people
                        transmit information and thought processes. Sometime during this growth, a trend emerged that
                        we now take for granted: companies started to have their own websites, in order to market their
                        products and services. The internet started out as a forum in which people can communnicate with
                        each other anonymously and over long distance, but somewhere between then and now, part of the
                        platform started to be utilized for marketing purposes. And through this phenomenon, the
                        importance of UX, or User Experience, became paramount as companies strived to ensure that
                        the user, or the customer in this case, undergo a pleasant experience while browsing their
                        website.
                    </p>
                    <p>And in this process, the dynamic between the user and the website starts to mimic a unique kind 
                        of interaction - a <em>game</em> that is played by the user and the website.
                    </p>
                    <p>In the recent times, with the increasing number of self-help strategies and guides being
                        developed, it is not surprising that corporations have decided to join the bandwagon.
                        Many self-help products have recently been introduced, ranging from simple mobile applications
                        that track your daily exercise progress, to full-fledged programs and schedules for things like
                        studying, exercise, weight-loss, meditation, etc. that promises to deliver results.
                    </p>
                    <p>By emulating a website designed to market such a product, I wanted to examine this unique subset of
                        the <em>self-improvement</em> issue, and perhaps offer an insight into the overarching question of why
                        <em> self-improvement</em> is so effective... and perhaps insidiously so.
                    </p>
                    <p>Below, I outline three distinct yet interconnected <em>games</em> that are present in the website. I do not
                        claim that these are the only games present (you may be able to find more). These are simply the 
                        games that I thought were interesting and relevant to the discourse at hand.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>1. The Game of Awareness - Privacy and Convenience</Accordion.Header>
                <Accordion.Body>
                    <p>If you were vigilant enough, you may have noticed the most blantantly insidious
                        aspect of the website: the Terms of Service and the Privacy Policy.
                    </p>
                    <p>If you did not notice, feel free to head back to the website and take a look.
                    </p>
                    <p>There is an obvious point to be made here, of course. With the imprecise wording 
                        of some of the sentences, the Terms of Service or the Privacy Policy can be exploited
                        in order to carry out some nefarious purposes. For instance, these Terms of Service and
                        Privacy Policy would not prevent the company from legally owning any material you upload
                        onto the website, and it would also not prevent the company from storing your personal
                        information for good without your permission under certain circumstances.
                    </p>
                    <p>These aren't as in-your-face as "The company is legally allowed to harvest your organs"
                        or such, but these are vague enough that they can be used to justify behaviours that would
                        otherwise be illegal for a company. On the other hand, these Terms of Service and Privacy Policy
                        will likely NOT hold up in a Court of Law, since I am not a Law student and there may be points
                        that I may have missed out. 
                    </p>
                    <p>But that's not the point I'm trying to make here. Can you say, with absolute confidence, that for 
                        all products and services you have ever purchased, you have read the Terms and Conditions for them?
                        I certainly can't, and chances are, you can't either.
                    </p>
                    <img src={ex_toc} className="img-explanation" />
                    <p>A single well-crafted sentence, stealthly added into the huge wall of text, can undermine your very
                        rights to <strong>privacy</strong> in using a certain product. When we consider how most of us forgo the reading of
                        Terms and Conditions in favor of convenience, we can start to question whether we truly are concerned
                        about our own privacy - whether we truly are concerned about surveillance. And if we take an alternative 
                        view in a sort of rationalizing way, that "Privacy doesn't exist, so why bother?", does this not make 
                        us unwilling yet aware participants in a game of privacy that we have no hope of winning?
                    </p>
                    <p>If these seem far-fetched, consider how easy it is for some applications on your computer
                        to obtain your personal information. In NUS, we even make use of applications that can control 
                        system-level settings such as locking wi-fi or access to other softwares. And video transmission
                        softwares can even record your face and voice. Consider that companies like Google and SpaceX has banned
                        their employees from using Zoom citing security concerns... and yet we use it almost on a daily basis,
                        mostly out of <strong>convenience</strong> - since it makes our meetings and conferences a lot easier.
                    </p>
                    <p>Perhaps the game is more prevalent in our daily lives than we think... or perhaps it is so prevalent
                        simply because we don't seem to care, and those who set the games are pushing the boundaries even 
                        further. And because it becomes so widespread, we accept it as the norm and continue to discount it.
                        So then, at what point does it become too much?
                    </p>
                    <p>When looking at the Social Credit system in China, many people express their outrage. But if the Singapore
                        government were to put this system in place without telling the populace, just like how the Terms and Conditions
                        of Memit managed to hide crucial information away from its users, what can we really do? What if this 
                        is already in place, and we simply just don't know, until the day comes when they decide to reveal it all
                        and start imprisoning people?
                    </p>
                    <p>And if that does happen, would it even surprise you?
                    </p>
                    <p>Ultimately, awareness is the key. And those who enact the game of control and power tries their best to
                        ensure that their participants are unaware that they are playing a game. 
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>2. The Game of Language - Personalities and Branding</Accordion.Header>
                <Accordion.Body>
                    <p>In websites, and especially those designed to sell a product, the language used is often geared in a
                        certain way. In this website in particular, I tried to emulate some of it as well... as best as I could.
                    </p>
                    <p>For instance, the website constantly addresses you, the user, directly. The sections which describe 
                        the product and the company are all worded as if the website is telling you a story. And all these
                        shouldn't be surprising. After all, most websites (including this one) try to adopt a friendly 
                        <strong> personality</strong> in order to make it more user-friendly. Nowadays, companies hire UX designers, 
                        or User Experience designers, to better achieve this effect.
                    </p>
                    <p>On a certain rational level, we as users know that websites are created and maintained by people 
                        with individual personalities. However, websites are man-made products - they don't initially 
                        have a <strong>personality</strong> until the designers <em>breathe life</em> into them. And so the contradiction arises:
                        when we peruse a website, we know that it is artificial, and yet, for well-designed websites, we
                        start to feel a sense of familiarity with it. 
                    </p>
                    <p>It is rather disturbing how easy it is to construct some sort of a personality. By creating a persona,
                        companies are able to create an illusion of a person communicating with you. And this is not just
                        limited to websites, either. Recently, many companies have started to use social media accounts 
                        to create more thorough Brand personalities (One particularly well-known example would be Wendy's...),
                        which has proven to increase their brand reputation and ultimately their sales figures.
                    </p>
                    <img src={ex_wendy} className="img-explanation" />
                    <p>And when there is something to be gained for one of the parties, we can ask if there is a <em>game</em> at
                        play. And indeed, there is a game being played here - one that carefully uses language to craft a
                        personality that appeals to users. 
                    </p>
                    <p>But is there something else at play here? Why does a personality, albeit a fake one, appeal to users?
                    </p>
                    <p>Perhaps the answer lies in the concept of the <em>insider</em> vs <em>outsider</em>, of the <em>human</em> vs <em>artificial</em>.
                        Informal language can be one of the indicators of emotion, which can signal to us that the other being is
                        a human, after all. And there may be a whole discussion to be had regarding whether websites can be 
                        considered a form of <em>cyborg</em> - an artificial being with human traits. Nevertheless, it is the game of
                        language that websites often play in order to bridge this gap, and perhaps in this case, for them to win,
                        they must successfully emulate a human persona so that their users can embrace them as <em>human</em>.
                    </p>
                    <p>So what then, if we as users accept the persona of a website as a "person"? Well, let us explore this further
                        in conjunction with the idea of <strong>Identity</strong>.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>3. The Game of Identity - Acceptance and Rejection of Beliefs</Accordion.Header>
                <Accordion.Body>
                    <p>Consider the Panopticon, designed by Jeremy Bentham, for a moment. The Panopticon presents us a scenario 
                        of explicit surveillance and invasion of privacy. However, we have seen from the Game of Awareness that 
                        perhaps this is not always the case. The players of the Game of Awareness may not be aware that they are
                        <em> prisoners</em> of the potential Panopticon, and even if they were, they wouldn't be compelled to act in a certain
                        way as surveillance becomes the norm.
                    </p>
                    <img src={ex_panop} className="img-explanation" />
                    <p>And we have discussed how the Game of Language is played in a certain way in order to create a website's persona, 
                        in order to appeal to the user as a fellow <em>human</em>, as an <em>insider</em>.
                    </p>
                    <p>But what is the connection between the two?
                    </p>
                    <p>In the Panopticon, the prisoners' awareness of the existence of surveillance is itself used as a tool against 
                        the prisoners. However, this is not an option available to websites: if the users, the players, are either 
                        unaware of or unfazed by the surveillance, then how do they guide the user towards the company's desired
                        outcome? The answer is persuasion, rather than coercion - the Game of Language, and the persona it creates.
                    </p>
                    <p>By creating a persona, the website attempts to create an identity for itself. And what makes this attempt
                        successful is through the use of <strong>Connotations</strong>. For instance, take a look at the images used by the Memit
                        website - the image of pen and paper, the image of the books and the globe, and the image of the laptop (notably
                        a MacBook). 
                    </p>
                    <p>
                        The imagery itself promotes a <em>certain notion</em> of what it envisions "studying" to be, and in the
                        process it solidifies its own beliefs. The name of the product, "Memit", comes from "Memorize it", which (hopefully)
                        is obvious to the user. Coupled with the features that the product has, such as the placards (memorization), the
                        timetable (rigid, pre-planned schedule), and the environment (free from <em>undesirable</em> events classified as
                        "distractions"), the website is consistent in its belief that studying should be carried out in a <em>certain way </em>
                        that encompasses memorization and rote learning. In the process of doing so, the website presents us with an identity 
                        that may or may not have beliefs that oppose our own beliefs, our own ideas about what something should be like (in this
                        case what the ideal notion of "studying" is).
                    </p>
                    <p>The process in which the website establishes its own identity and offers its beliefs to you, is akin to a clash between
                        the beliefs of the user and the beliefs of the website - a clash of identities. If you, the user, happens to accept these
                        beliefs laid out by the website and decide to purchase the product, then the website wins - it has successfully imposed
                        its own identity onto you. And if you should happen to reject these beliefs, then you have won. This is what I refer to
                        as the Game of Identity.
                    </p>
                    <p>The ideation of Memit as a product initially began with the question of "Why are self-improvement strategies and guides 
                        so effective?". The Game of Identity reveals that perhaps it is the "subsumption" of the user's identity that often 
                        result in the user's acceptance of the product and what it stands for, and hence the effectiveness of self-improvement
                        strategies and guides.
                    </p>
                    <p>But within the Game of Identity, there are two issues that needs to be addressed. First, what does "imposing one's identity"
                        even mean? And if it refers to an absorption process of sorts, how can the user <em>absorb</em>, or <em>impose</em> their identity
                        onto the website?
                    </p>
                    <p>To address the first question, we can examine the idea of identity in closer detail. By assuming that a person's identity
                        is formed over time through their experiences, we can posit that an individual's identity is fluid and malleable. By extension,
                        this also means that their identity can be further shaped by new experiences, including a <em>clash</em> with another identity, 
                        another set of beliefs. The manner in which an individual accepts another set of beliefs and incorporates it into their 
                        own belief system can be referred to as the "imposition of identity". But here, the second question then becomes even 
                        more prominent - how does the user impose their identity onto the website, if the identity of the website is an artificial 
                        creation from language and imagery? 
                    </p>
                    <p>And the answer is that they simply cannot.</p>
                    <p>Here we see the bias in the game - the Game of Identity heavily favours the website's' identity over the user's. 
                        While the website is free to impose its identity onto the user through persuasion, the user is unable to correspond.
                        And this shouldn't be surprising. After all, if the website has an artificial identity that mimics a personality but
                        is unable to respond to stimuli in the way that the user can, how can it accept a different set of beliefs and incorporate it
                        into its own identity?
                    </p>
                    <p>It is through this bias that the sombre reality of the Game of Identity is revealed. The website, the artificial persona,
                        has all the power to impose its identity onto you; and you, as the user and the player, has only two choice: Accept or Reject.
                        Should you accept the product, the website has successfully imposed its identity onto you, and will have gained yet another customer.
                        But should you reject the product and the beliefs it represents, the impact on the company is disproportionately insignificant; after all, 
                        you are simply one of their many potential customers. Here, perhaps the idea of the Panopticon can once again be relevant: 
                        just as the Panopticon has one guard to potentially watch over the many prisoners, the company has the website to surveil and 
                        impose beliefs on its customers, its consumers. And the key difference here is that unlike the guard, a website is a digital 
                        entity that can simultaneously watch over all of its users at once.
                    </p>
                    <p>And now, we can see the <strong>Corruption</strong> of the ideal, manifesting itself as a game. What may have started out as a 
                        genuine desire to help others improve has turned into a marketable product, framed as a game in which you are powerless and only have two choices. 
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>4. The Final Game</Accordion.Header>
                <Accordion.Body>
                    <p>If you have read all of the above, you may have noticed that some of the games that I have described 
                        thus far can be applied to all of my explanations... even now. 
                    </p>
                    <p>After all, this explanation page is in itself a website designed to create a persona representation 
                        of myself, the writer, in an attempt to convince you, the reader.
                    </p>
                    <p>Thank you for playing this final game with me, though you may not have been aware.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ExplanationAccordion;