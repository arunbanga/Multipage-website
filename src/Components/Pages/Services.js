import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { Button } from "../Styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <>
      <Wrapper classname="section">
        <h2 className="common-heading">Our Services</h2>
        <div className="container grid grid-three-columns">
          {services.map((cur) => {
            const { id, login, avatar_url, html_url } = cur;
            return (
              <>
                <div key={id} className="card">
                  <figure>
                    <img src={avatar_url} alt={login} />
                  </figure>
                  <div className="card-data">
                    <h3>{login}</h3>
                    <p>{html_url}</p>
                    <NavLink to="/services">
                      <Button className="btn">Read More</Button>
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
  }
  .card-data {
    padding: 0 2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: 1.4rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-columns {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-columns,
    .grid-three-columns {
      grid-template-columns: 1fr;
    }
  }
`;
export default Services;
