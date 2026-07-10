---
title: Common Practices
description: Everything you need to start programming collaboratively.
sidebar:
  order: 1
---

When programming, it can be easy to write code just for yourself. However, to be successful both
on the team and in the future, you will need to learn to work collaboratively with others.
Here are some common practices to follow to maximize your workflow productivity, in both team
and individual settings:

## Don't work on main directly

The `main` branch is the official, working version of the code that everyone shares. If you make
changes directly on `main`, you risk breaking the version that the rest of the team (and the
robot) depends on, and you leave no easy way to undo your changes if something goes wrong.

Instead, whenever you start something new, make a branch for it. Give it a name that says what
it is for, like `intake-subsystem` or `fix-auto-drift`. Do all your work there, and when it is
ready, open a Pull Request to get it merged back into `main`. See the
[Guide to Git](/9450-Curriculum/programming-essentials/guide-to-git/) for how branches and Pull
Requests work.

## Keep your branch up to date with main

While you are working on your branch, other people are merging their own work into `main`. The
longer your branch sits without catching up, the more it drifts away from what everyone else has,
and the harder it becomes to merge later.

To avoid this, regularly pull the latest `main` into your branch. Get in the habit of doing it
at the start of each work session, and again before you open a Pull Request. If someone else's
changes conflict with yours, it is much easier to sort out a small conflict now than a large one
after a week of drift.

## Keep commits small and focused

Try to keep each commit about one thing. A commit that fixes a single bug or adds a single small
feature is easy to read, easy to review, and easy to undo if it turns out to be wrong. A commit
that changes ten unrelated things at once is a headache for everyone, including future you.

Write commit messages that actually say what the commit does. "fixed drive code" tells the team
much more than "stuff" or "asdf" when they are trying to figure out what changed and why.

## Minimizing issues

Most collaboration problems come from people surprising each other. A few habits go a long way:

- Pull the latest changes before you start working so you are building on top of what already exists.
- Commit and push often so your work is backed up and visible to the team, instead of sitting only on your machine.
- Tell your teammates what you are working on so two people don't end up rewriting the same file.
- Don't commit things that don't belong in the repo, like build output or editor settings files.

## Naming

Please don't name things stupidly, like commits called "Mongolian Throat Singing 2" or similar.
Naming for anything, whether commits, variables, methods. or repositories, should be concise and
to the point about what changes you are making or what that thing actually does.