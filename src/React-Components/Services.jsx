import React from 'react';
import styled from 'styled-components';
import { primaryColor, white } from '../variables';
import CodeIcon from '@material-ui/icons/Code';
import Fade from 'react-reveal/Fade';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Div = styled.div``
const Codeicon = styled(CodeIcon)``
const Searchicon = styled(SearchOutlinedIcon)``
const Head = styled.h3``
const Row = styled.div``
const Col = styled.div``
const Main = styled.div``
const Card = styled.div``
const Secondary = styled.div``
const MainTitle = styled.div``
const Span = styled.h3``
const Para = styled.p``
const ParaMain = styled.p``
const ParaSec = styled.p``
const SecTitle = styled.h2``
const Italic = styled.i``
const Link = styled.a``
const Section = styled.div`
    padding: 3rem 0 1rem 0;
    width: 100%;
    height: 100%;
    background: #262525;

    ${Div}{

        ${Row}{

            ${Col}{

                ${Main}{
                    
                    ${Card}{
                        background:#383636;
                        margin-bottom: 0.7rem;
                        border-radius: 10px;
                        transition: all 0.7s ease;
                        cursor: pointer;

                        &:hover{
                            transform: scale(1.1);
                        }
                        ${MainTitle}{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            ${Span}{
                                color: ${primaryColor};
                            }

                            ${Head}{
                                color: ${white};
                            }

                            ${Codeicon}{
                                color: ${primaryColor};
                            }

                            ${Searchicon}{
                                color: ${primaryColor};
                            }
                        }

                        ${Para}{
                            color: #6b6a68;
                        }

                        ${Link}{
                            color: #d4d2d2;
                            text-decoration: none;
                        }
                    }
                }

                ${Secondary}{
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding-left: 5rem;
                    ${ParaSec}{
                        color:  #d4d2d2;
                    }

                    ${SecTitle}{
                            fontsize: 3rem;
                            color: ${white};
                            
                    }

                    ${Italic}{
                           color: ${white};
                           font-weight: 100;
                           margin-top: 2rem;
                           margin-bottom: 1rem; 
                    }
                    ${ParaMain}{
                        color:  #d4d2d2;
                        width: 70%;
                    }
                }
            }
        }
    }

`


const Services = () => {
    return (
        <Section>
            <Div className='container'>
                <Row className='row align-items-center'>
                    <Col className='col-lg-6'>
                        <Main>
                           <Fade right>
                           <Card className='p-4' id='card'>
                                <MainTitle>
                                    <Span>Design</Span>
                                </MainTitle>
                                <Para>Create digital products with unique ideas.</Para>
                                <Link href='#'>10 Projects</Link>
                            </Card>
                           </Fade>
                           <Fade left>
                           <Card className='p-3' id='card'>
                                <MainTitle>
                                    <Head>Front-End</Head> <Codeicon />
                                </MainTitle>
                                <Para>I develop Front-End with coding super smooth.</Para>
                                <Link href='#'>5 Projects</Link>
                            </Card>
                           </Fade>
                            <Fade right>
                            <Card className='p-3' id='card'>
                                <MainTitle>
                                    <Head>SEO</Head> <Searchicon />
                                </MainTitle>
                                <Para>Boost your buisness with SEO optimize.</Para>
                                <Link href='#'>3 Projects</Link>
                            </Card>
                            </Fade>
                        </Main>
                    </Col>
                    <Col className='col-lg-6'>
                       <Fade bottom>
                       <Secondary id='secondary'>
                            <ParaSec>Introduce</ParaSec>
                            <SecTitle>Hello! I'm Sparrow.</SecTitle>
                            <Italic>Every begin with an even better story.</Italic>
                            <ParaMain id='para'>Since beginning my journey as a freelance designer 2 years ago, I've done remote work for agencies, consulted
                             for startups, and collaborated with talented people to create single and multi-page
                              web apps for both private and public enterprises. I'm quite confident, naturally 
                              curios, and perpetually working on improving my chopsone design problem at a time.
                              </ParaMain>
                        </Secondary>
                       </Fade>
                    </Col>
                </Row>
            </Div>
        </Section>
    )
}

export default Services