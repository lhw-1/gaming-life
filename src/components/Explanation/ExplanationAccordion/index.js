import React from 'react';
import { Accordion } from 'react-bootstrap';

import '../../styles.css';

const ExplanationAccordion = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Rationale and Critique behind this website</Accordion.Header>
                <Accordion.Body>
                    <p>The initial ideation of this project was when, during a consultation with Ms Cera, 
                        the idea of "corruption" was brought up and discussed. The notion of "corruption" 
                        suggests an internal decay or degradation of something that is, or was, generally 
                        regarded as "good". While pondering on how this concept extends to our daily lives, 
                        I arrived at the concept of "self-help" or "self-improvement". </p>
                    <p>The topic of "self-improvement" always did seem somewhat contradictory to me. 
                        If you take a look at the vast amount of self-help media such as books, guides, videos, 
                        etc. that are readily available to us both physically and digitally (but especially 
                        digitally), they mostly consist of other people telling us how to improve ourselves. 
                        They essentially suggest that they know how to cater to our wellbeing even better than 
                        ourselves. Is that not a contradiction, or at least an oddity? That someone else knows 
                        more about how to facilitate "self-help" more than you?</p>
                    <p>From there, I started to examine the question of "Why then?" - if these self-improvement 
                        advices are from other people, why do people still accept these advices, to a point where 
                        some theories have garnered cult-like followings? Is it simply Placebo effect, or is it 
                        something more than that?</p>
                    <p>For my UTC2113 Project, what I wanted to examine and critique was a subset of this problem.
                        Over the last few decades, the internet has exponentially become a medium in which people
                        transmit information and thought processes. Sometime during this growth, a trend emerged that
                        we now take for granted: companies started to have their own websites, in order to market their
                        products and services. The internet started out as a forum in which people can communnicate with
                        each other anonymously and over long distance, but somewhere between then and now, part of the
                        platform started to be utilized for marketing purposes. And through this phenomenon, the
                        importance of "UX", or User Experience, became paramount as companies strived to ensure that
                        the user, or the customer in this case, undergo a pleasant experience while browsing their
                        website.
                    </p>
                    <p>And in this process, the dynamic between the user and the website starts to mimic a unique kind 
                        of interaction - a "game" that is played by the user and the website.
                    </p>
                    <p>In the recent times, with the increasing number of self-help strategies and guides being
                        developed, it is not surprising that corporations have decided to join this "bandwagon".
                        Many self-help products have recently been introduced, ranging from simple mobile applications
                        that track your daily exercise progress, to full-fledged programs and schedules for things like
                        studying, exercise, weight-loss, meditation, etc. that promises to deliver results.
                    </p>
                    <p>By emulating a website designed to market such a product, I wanted to examine this unique subset of
                        the "self-improvement" issue, and perhaps offer an insight into the overarching question of why
                        "self-improvement" is so effective... and perhaps insidiously so.
                    </p>
                    <p>Below, I outline three distinct yet interconnected "games" that are present in the website. I do not
                        claim that these are the only games present (you may be able to find more).
                    </p>
                    <p>These are simply the games that I thought were interesting and relevant to the discourse at hand.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>The Game of Control and Power - Privacy and Convenience</Accordion.Header>
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
                    <p>But that's not the point I'm trying to make here.
                    </p>
                    <p>Can you say, with absolute confidence, that for all products and services you have ever purchased,
                        you have read the Terms and Conditions for them?
                    </p>
                    <p>A single well-crafted sentence, stealthly added into the huge wall of text, can undermine your very
                        rights to privacy in using a certain product. When we consider how most of us forgo the reading of
                        Terms and Conditions in favor of convenience, we can start to question whether we truly are concerned
                        about our own privacy - whether we truly are concerned about surveillance. 
                    </p>
                    <p>And if we take an alternative view in a sort of rationalizing way, that "Privacy doesn't exist, so 
                        why bother?", does this not make us unwilling yet aware participants in a game of privacy that we 
                        have no hope of winning?
                    </p>
                    <p>If you think these are far-fetched, imagine how easy it is for some applications on your computer
                        to obtain your personal information. In NUS, we even make use of applications that can control 
                        system-level settings such as locking wi-fi or access to other softwares. And video transmission
                        softwares can even record your face and voice.
                    </p>
                    <p>Perhaps the game is more prevalent in our daily lives than we think.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>The Game of Language - Connotations and Effects</Accordion.Header>
                <Accordion.Body>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>The Game of Identity - Mirrors and Beliefs</Accordion.Header>
                <Accordion.Body>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ExplanationAccordion;