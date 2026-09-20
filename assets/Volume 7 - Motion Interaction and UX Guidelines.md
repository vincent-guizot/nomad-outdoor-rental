# NOMAD UI DESIGN BIBLE

## Volume 7 — Motion, Interaction & UX Guidelines (v1.0)

**Project:** Nomad Outdoor Gear Platform

**Document Type:** Motion Design & User Experience

**Purpose:**
This document defines every interaction, animation, transition, feedback pattern, accessibility rule, and user experience guideline used throughout the Nomad ecosystem.

Motion should never exist purely for decoration.

Every animation should communicate state, improve usability, or guide user attention.

Nomad should feel calm, premium, and effortless.

---

# Motion Philosophy

Motion should feel like nature.

Not technology.

Animations should resemble:

• Wind

• Water

• Clouds

• Sunrise

• Slow camera movement

Never use aggressive or playful animations.

Avoid anything that feels artificial.

The interface should move with elegance and confidence.

---

# Motion Principles

Every animation must satisfy at least one purpose.

✓ Guide attention

✓ Confirm interaction

✓ Reduce uncertainty

✓ Explain hierarchy

✓ Improve navigation

✓ Create continuity

If animation has no purpose,
remove it.

---

# Motion Duration

Fast

150ms

Used For

Hover

Icons

Buttons

---

Standard

250ms

Used For

Cards

Dropdowns

Tabs

---

Slow

350ms

Used For

Page Transition

Drawer

Hero Animation

---

Maximum

500ms

Only for hero banners and cinematic effects.

Never exceed 500ms.

---

# Motion Easing

Use smooth easing.

Recommended

ease-out

ease-in-out

Avoid

Bounce

Elastic

Overshoot

Rubber Band

---

# Page Transition

Every page transition should feel seamless.

Animation

Fade + Slide Up

Duration

300ms

Opacity

0 → 100%

Translate Y

16px → 0

---

# Sidebar

Desktop

Always visible.

Tablet

Collapse smoothly.

Mobile

Drawer slides from left.

Animation

250ms

---

# Hero Section

Hero Photography

Slow Zoom

Scale

1 → 1.04

Duration

8–12 seconds

Loop

Infinite

---

Hero Text

Fade Up

Headline

Delay

0ms

Subtitle

100ms

Description

200ms

Buttons

300ms

Statistics

400ms

---

# Navigation

Hover

Background Fade

Icon Scale

1.05

Text Color Transition

200ms

Active Menu

Soft Pill Background

---

# Buttons

Hover

Scale

1.02

Shadow Increase

Color Transition

150ms

---

Pressed

Scale

0.98

---

Disabled

Reduced Opacity

No Motion

---

Loading

Spinner

Progress Indicator

---

Success

Check Icon

Fade

---

# Cards

Hover

Lift

4px

Scale

1.02

Shadow

Increase

Image

Zoom

1.05

Duration

200ms

---

# Product Cards

Hover

Image Zoom

Price Fade

Button Reveal

Wishlist Icon Fade

---

# Category Cards

Image Zoom

Gradient Fade

Lift

---

# Collection Cards

Photography Zoom

Headline Fade

CTA Slide

---

# Rental Cards

Calendar Highlight

Availability Fade

CTA Expand

---

# Journal Cards

Photography Zoom

Reading Time Fade

Headline Slide

---

# Product Gallery

Thumbnail Click

Cross Fade

Main Image

Zoom

Fullscreen

Fade

Swipe

Mobile

---

# Search

Focus

Expand Width

Border Highlight

Shadow Increase

Placeholder Fade

---

# Filters

Desktop

Slide Down

Mobile

Drawer

Animation

250ms

---

# Dropdown

Fade

Scale

Origin

Top

---

# Accordion

Height Animation

Chevron Rotate

180°

Duration

200ms

---

# Tabs

Underline Slide

Fade

Content Cross Fade

---

# Timeline

Status Changes

Progress Line

Animated Fill

Current Step

Pulse Once

---

# Calendar

Date Hover

Soft Highlight

Selected Range

Fade

Current Day

Outline

---

# Payment

Processing

Spinner

Success

Checkmark Animation

Failed

Shake (Very Subtle)

Pending

Pulse

---

# Notifications

Toast

Slide Down

Fade

Auto Close

4 Seconds

---

# Modal

Backdrop

Fade

Content

Scale

0.95 → 1

Duration

250ms

---

# Drawer

Slide From Right

Overlay Fade

Duration

300ms

---

# Skeleton Loading

Use shimmer animation.

Avoid flashing.

Loading should feel calm.

---

# Empty States

Fade In

Illustration

Scale

0.98 → 1

CTA

Fade Up

---

# Image Loading

Lazy Loading

Fade

Blur Up

---

# Statistics

Counter Animation

Once Only

Duration

1000ms

---

# Charts (Future)

Line Draw

Bar Grow

Number Counter

---

# Scroll Behavior

Smooth Scroll

Anchor Links

Table Of Contents

Back To Top

Scroll Progress

Journal Page

---

# Hover States

Cards

Lift

Buttons

Scale

Images

Zoom

Links

Underline

Icons

Rotate 3°

Maximum

---

# Micro Interactions

Wishlist

Heart Fill

Bookmark

Save Animation

Share

Copied Toast

Add To Cart

Success Toast

Rent

Calendar Highlight

Payment

Confirmation Animation

Review

Star Fill

Profile

Avatar Glow

---

# Feedback States

Success

Green Accent

Check Icon

---

Warning

Yellow Accent

Warning Icon

---

Error

Red Accent

Error Icon

---

Information

Blue Accent

Info Icon

---

Loading

Gray Spinner

---

# Accessibility

Respect prefers-reduced-motion.

Reduce animations automatically.

Keyboard Navigation

Supported

Visible Focus Ring

Always Visible

Screen Reader Friendly

ARIA Labels

Semantic HTML

44px Minimum Touch Area

---

# Responsive Motion

Desktop

Full Motion

Tablet

Reduced Motion

Mobile

Simplified Motion

Performance First

---

# Performance Guidelines

Use CSS Transform.

Avoid layout shifts.

Avoid animating width and height.

Prefer:

Transform

Opacity

Scale

Translate

Never animate:

Top

Left

Width

Height

When avoidable.

---

# Framer Motion Guidelines

Use

motion.div

motion.section

AnimatePresence

layout

viewport

whileHover

whileTap

whileInView

viewport={{ once: true }}

Use spring animation only where appropriate.

Avoid excessive bounce.

---

# Animation Timing

Hero

350ms

Cards

200ms

Buttons

150ms

Drawer

300ms

Modal

250ms

Sidebar

250ms

Toast

200ms

Dropdown

180ms

Accordion

200ms

Tabs

180ms

Gallery

250ms

Timeline

300ms

---

# UX Principles

Always prioritize clarity.

Never interrupt users.

Reduce cognitive load.

Provide immediate feedback.

Keep navigation predictable.

Design for exploration rather than urgency.

Encourage confidence before conversion.

Promote photography over decoration.

Respect user attention.

Reward interaction with subtle motion.

---

# User Journey

Landing

↓

Explore

↓

Discover

↓

Learn

↓

Compare

↓

Purchase / Rent

↓

Track

↓

Return

↓

Adventure Again

Every transition should feel like one continuous journey rather than separate pages.

---

# Final Design Principles

Nomad should never feel like a marketplace.

It should feel like a premium outdoor companion.

The interface should disappear behind beautiful photography, intuitive navigation, and meaningful interactions.

Every animation should reinforce trust.

Every transition should feel effortless.

Every interaction should encourage users to spend more time exploring nature and less time learning how to use the application.

The ultimate goal is not simply to help users buy or rent outdoor gear.

The goal is to create a digital experience that inspires real-world adventures.
