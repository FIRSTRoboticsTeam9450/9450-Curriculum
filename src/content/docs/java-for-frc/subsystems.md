---
title: Subsystems
description: How subsystems are structured on the robot.
sidebar:
  order: 2
---

Each of the systems on the robot has its own code files, these are called Subsystems.
They include everything from the LEDs on the robot to the shooter, drivetrain, intake,
and climber.
Due to how WPIlib handles subsystems it needs them to be constructed objects, so all the
subsystems contain a singleton for their instance instead of being static.

All Subsystems contain a Periodic method, which runs every robot tick (20ms) and a
getInstance method which returns the subsystem's instance.