// import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default function Header() {
  return (
    <header>
      <Button.Group
        color="black"
      >
        <NavLink
          key="/"
          to="/"
        >
          <Button>Animated Outlines</Button>
        </NavLink>

        <NavLink
          key="/second"
          to="/Wavy"
        >
          <Button>Wavy</Button>
        </NavLink>

        <NavLink
          key="/third"
          to="/Neon_input"
        >
          <Button>Neon Input</Button>
        </NavLink>

        <NavLink
          key="/fourth"
          to="/Glassmorphism"
        >
          <Button>Glassmorphism</Button>
        </NavLink>

        <NavLink
          key="/fifth"
          to="/Neumorphism-ring"
        >
          <Button>Neumorphism Ring</Button>
        </NavLink>

        <NavLink
          key="/sixth"
          to="/3D-stairs-piano"
        >
          <Button>3D Stairs Piano (WIP !)</Button>
        </NavLink>
      </Button.Group>
    </header>
  );
}
