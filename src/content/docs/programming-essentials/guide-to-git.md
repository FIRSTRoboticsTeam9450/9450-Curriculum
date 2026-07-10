---
title: Guide to Git
description: The software you will use to get things done!
---

As a programmer who works in a team, it is enevitable that multiple people will need to
work on something at the same time, or for multiple versions of the software to be
made and maintained. Even as an individual programmer, sometimes you will need to work
on the fly with multiple devices, or maybe you want to test a single feature you
made without changing your main release. However, how do we go about working effectively
in these situations?

There are many systems available for Source Control, or the handling of multiple sources
of change. The most popular one which you will no doubt be using is:

## [Git](https://git-scm.com/)

Since Git is such an important tool, it is essential to know how to use it, so we will
start from the basics together.

## What is source control?

While it sounds simple, having multiple people work on the same thing is rather complex.
Google Docs solves this issue by allowing edits to occur in real time, but what happens
when you don't have internet?
Imagine two people are working on a project. One person decides to add a new feature to
the bottom of a file, while the other goes about improving the code. 


## Installing Git

To start of course we need to install Git. While Visual Studio Code has its own built-in
source control, it is rather limited especially when you will be doing more complicated
tasks in the future, so it is good to have Git installed.

Step 1: Install
Install git from the page https://git-scm.com/install.
Choose your operating system and install git. While there are many setup options, you can
just choose the default for now.

Step 2: Setup
Of course, to use git, it needs to know who you are. To set your Git username and email,
use `git config --global user.name "Your Name"` and
`git config --global user.email "your.email@example.com"` in Git Bash or Terminal. These
values are attached to every commit you make. Note that these are just for identification
and are not creating an account or anything like that.

Step 3: Git Clients
Since it can be somewhat awkward to use git in the console, there are several clients
available for using git more easily.
Here are some good free git clients:
- **[Fork](https://git-fork.com/)**: A more advanced git client, but with a full suite of functions. This is the one I use.
- **[Github Desktop](https://desktop.github.com/download/)**: A more basic but easy to use git client. Comes integrated with github.

## Vocabulary

Before going into how to use Git, we need to go over some basic vocab that we will
use to describe your project.
- Repository / Repo: A centralized location where your project files are stored. Think of it as a "tree" that stores everything about your project, from the source code to licenses. Each project should only have one repository.
- Remote: The version of the Repository that is stored on the cloud. A repository may have multiple remotes.
- Branch: The individual versions of the project (like the branches of a tree). Branches are usualy used to test specific changes or versions of the code without affecting the main release. Branches are created based on a current branch, and their changes can be "merged" into each other (see below) to carry their changes over.

# Using Git

Git has a list of commands that you will use to control your versions. Here are some of
the most common:

- Clone: Makes a local copy of a repository onto your computer. This will usually be the first thing you do when working on a project for the first time, unless you are making a new project. You must provide the git url for the repository.
- Commit: A distinct "version" of the code at a point in time. Usually each feature gets its own commit or multiple commits. Try to avoid making multiple changes to different things in the same commit.
- Pull: "Pull" in changes from the remote into your local repository. Note that you cannot pull unless you commit or stash your uncommited changes.
- Push: "Pushes" your local commits to the remote. Note that only commited changes can be pushed.
- Checkout: Replaces the local version of your files with that of another branch.
- Fork: Make a copy of a repository that tracks changes to the original. Useful when the original is being updated while you are making changes.
- Init: Initialize a new repository. Choose a folder for the repository to be made from.

## Pull Requests

A Pull Request (PR) is how you ask for your branch to be merged into another branch, usually
`main`. It also gives the team a chance to review your work first: teammates can read your
changes, comment on specific lines, and ask for fixes before anything gets merged.

On a team you usually should not commit straight to `main`. Instead you make a branch for your
feature or fix, do your work there, and open a PR when it is ready. This keeps the main code
stable and gives someone a chance to catch problems before they land.

PRs are a feature of the site hosting your remote (like GitHub), not of Git itself. To make one:

1. Create a branch and switch to it (`git checkout -b my-feature`), do your work, and commit.
2. Push the branch with `git push` so it shows up on GitHub.
3. On GitHub, open the **Pull requests** tab and click **New pull request** (or use the
   "Compare & pull request" banner that appears after you push).
4. Set the base branch to where your changes should go (e.g. `main`), write a title and short
   description of what you changed, and create the PR.

If reviewers ask for changes, just commit and push more to the same branch and the PR updates
itself. Once it is approved, someone merges it, and you can delete the branch.
