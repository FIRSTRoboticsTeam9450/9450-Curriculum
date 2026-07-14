---
title: Codebase Overview
description: How the robot's code is laid out.
sidebar:
  order: 1
---

Before you start writing robot code, it helps to know how the whole thing is put together. The
codebase is split up so that each part of the robot has its own place, and a few central files
tie everything together. Here is the general layout.

## Subsystems

The robot is made up of physical mechanisms, like the intake, the shooter, and the drivetrain.
Each one of these gets its own file, called a **subsystem**. A subsystem is the class that owns
a piece of hardware and is in charge of controlling it. The intake subsystem talks to the intake
motors, the drivetrain subsystem talks to the drive motors, and so on.

Each subsystem also keeps track of its own state with an internal **state machine**. Instead of
other code reaching in and telling the motors exactly what to do, the subsystem knows what state
it is in (for example, the intake being `IDLE`, `INTAKING`, or `EJECTING`) and handles the details
of getting there itself. This keeps the messy hardware logic in one place.

## Coordinating the subsystems

Subsystems often need to work together. The shooter should not fire while the intake is still
pulling a game piece in, and the drivetrain might need to line up before the shooter does anything.
Rather than having every subsystem try to keep track of every other one, this is handled by a
central state machine in the **`CoordinationSubsystem`**.

The `CoordinationSubsystem` looks at the overall situation and decides what the robot as a whole
should be doing, then tells the individual subsystems which state to be in. So you end up with two
layers: each subsystem manages its own internal state, and the `CoordinationSubsystem` manages how
they all fit together.

## RobotContainer.java

`RobotContainer.java` is where the subsystems actually get created. Every subsystem is an object,
and it is instantiated once here so the rest of the code has a single copy to work with.

`RobotContainer.java` is also where the **keybinds** live. This is where you connect a button on
the controller to an action, so that pressing a button schedules a command to run.

## Commands

A **command** is a single action the robot can perform. A command usually does something small,
like calling a method on a subsystem or telling a subsystem to change its state. Commands are the
pieces you bind buttons to, and they are also what get run during autonomous.

Keeping actions as commands means the robot can decide when they run, stop them when something else
needs to happen, and make sure two commands don't fight over the same subsystem at the same time.

## Robot.java and the CommandScheduler

`Robot.java` is the top of the program. It runs the **`CommandScheduler`**, which is the part of
the code that actually coordinates commands: it decides which commands are currently running,
starts new ones when they are scheduled, and stops ones that are finished or interrupted. You will
rarely edit the scheduler itself, but it is what makes commands and subsystems work together while
the robot is running.

## Constants.java

Values that get reused across the code, like motor IDs, speeds, and other tuning numbers, are kept
in **`Constants.java`**. Putting them in one place means you can change a number once instead of
hunting for it in five different files, and it keeps magic numbers out of the subsystem code.
