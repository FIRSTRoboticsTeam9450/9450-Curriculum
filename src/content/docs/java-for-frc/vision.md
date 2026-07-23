---
title: Vision
description: How the robot sees where it is.
sidebar:
  order: 10
---

Even if all of your other code is done, your robot cannot do anything if it can't tell where it is!
To do this, we need Vision.

# Key components of vision

To be able to use vision properly, you will need some things:

## Vocabulary

- Pose: A data representation of the current position and heading of the robot. The components of a pose consist of the current direction as a vector as well as the current position. Pose2D is in 2d space while Pose3D is in 3d space.
- April Tag: Unique visible patterned markers like QR codes which are spread throughout the field. Since they are unique, you can see them to tell where you are since you know where each april tag is.
- LimeLight: The cameras we will be using. They find their own Pose relative to a visible AprilTag.
- Odometry: The Odometer is the hardware in the robot that tells where it is without vision. It is less accurate than vision and deviates over time but does not need to see anything.

## Software

- [Limelight Hardware Manager](https://docs.limelightvision.io/docs/resources/downloads): Manages your limelights. You can configure the pose of each limelight relative to the robot here, to allow for them to determine the robot's pose.


# The fundamentals of Vision

Ultimately, the purpose of vision is simply to provide an accurate measurement of the robot's current
position. Thus, the essence of vision is to utilize all measurements you have available to you, find
and consider how correct each of them are, and use them to create more accurate predictions. 

While Visible data from the limelights is very important when creating Vision, this information is
completely negated if the limelights cannot see any targets, and of course over time you may find that
some information is less reliable than others. This necessitates the use of other sensors, specifically
the Odometer. While the Odometer is only reliable short-term, it does not need any external measurements
to function. When a wealth of accurate data is provided (such as multiple limelights seeing multiple tags
with good focus) it is possible to recalibrate the Odometer to this data so that it may be relied upon
if the limelights later lose targets. Thus, a good Vision subsystem combines information recieved from
the LimeLights as well as the Odometry and uses them in conjunction to create an accurate prediction of
the robot's Pose.