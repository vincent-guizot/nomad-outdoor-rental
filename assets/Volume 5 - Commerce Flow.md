# NOMAD UI DESIGN BIBLE

## Volume 5 — Commerce Flow (v1.0)

**Project:** Nomad Outdoor Gear Platform

**Document Type:** Commerce Experience

**Pages Included**

• Rent

• Payment

• Transactions

• About

---

# Purpose

Commerce Flow represents the complete customer journey after discovering products.

Unlike a traditional e-commerce website, Nomad supports both product purchasing and gear rental.

The experience should be seamless, trustworthy, transparent, and premium.

Users should always understand:

• What they are purchasing or renting

• What happens next

• Current order status

• Rental timeline

• Payment status

• Return process

Every step should reduce uncertainty.

---

========================================================

# USER FLOW

```
Landing
      ↓
Home
      ↓
Shop
      ↓
Product Detail
      ↓
Buy Now / Rent Now
      ↓
Payment
      ↓
Transactions
      ↓
Completed
```

Rental Flow

```
Browse Gear
      ↓
Product Detail
      ↓
Rent Now
      ↓
Select Rental Dates
      ↓
Payment
      ↓
Active Rental
      ↓
Return
      ↓
Completed
```

---

# PAGE 06 — RENT

---

## Purpose

Allow users to browse and rent premium outdoor equipment.

Renting should feel equally important as purchasing.

---

## Layout

```
-------------------------------------------------------------
Sidebar | Hero Banner
-------------------------------------------------------------
        | Search
-------------------------------------------------------------
        | Filters | Rental Grid
-------------------------------------------------------------
```

---

## Hero

Large mountain photography.

Headline

Rent Premium Outdoor Gear.

Description

High-quality equipment without the commitment of ownership.

Primary CTA

Browse Rentals

---

## Search

Search equipment...

---

## Filters

Category

Price Per Day

Availability

Rental Duration

Brand

Difficulty

Season

Weight

---

## Rental Cards

Equipment Image

Rental Price

Original Price

Availability

Rating

Rent Button

Wishlist

---

## Rental Details

Daily Price

Weekly Discount

Monthly Discount

Deposit

Cleaning Fee

Pickup

Delivery

Insurance

---

## Availability Calendar

Monthly Calendar

Booked Dates

Available Dates

Holiday Indicator

Selectable Range

---

## Rental Timeline

Reservation

↓

Pickup

↓

Active Rental

↓

Return

↓

Completed

---

## Recommended Rentals

Horizontal Carousel

---

## Rental FAQ

Accordion

---

## Empty State

No Rental Gear Available

---

========================================================

# PAGE 07 — PAYMENT

---

## Purpose

Provide a secure, simple, and transparent payment experience.

Users should never feel confused about pricing.

---

## Layout

```
-------------------------------------------------------------
Sidebar | Payment Form           | Order Summary
-------------------------------------------------------------
```

---

## Left Panel

Payment Information

---

Contains

Customer Details

Shipping Address

Rental Dates (if applicable)

Delivery Method

Coupon

Notes

---

## Payment Methods

Credit Card

Virtual Account

Bank Transfer

QRIS

E-Wallet

Apple Pay (Future)

Google Pay (Future)

---

## Billing Summary

Subtotal

Shipping

Rental Fee

Deposit

Discount

Tax

Total

---

## Security Notice

256-bit SSL Encryption

Secure Payment

Trusted Gateway

Money Back Guarantee

---

## Right Panel

Order Summary

Products

Rental Dates

Estimated Delivery

Estimated Return

Total

Pay Now Button

---

## Payment States

Processing

Success

Failed

Pending

Expired

Refunded

---

========================================================

# PAGE 08 — TRANSACTIONS

---

## Purpose

Single place for all customer activities.

Orders

Rentals

Returns

Invoices

Tracking

Payments

---

## Layout

```
-------------------------------------------------------------
Sidebar | Transaction Tabs
-------------------------------------------------------------
        | Transaction List
-------------------------------------------------------------
```

---

## Tabs

Pending Checkout

Orders

Rentals

Returns

Cancelled

Completed

---

## Transaction Card

Thumbnail

Order Number

Status

Price

Date

Products

View Details

Download Invoice

---

## Transaction Detail

Timeline

Order Summary

Shipping

Payment

Rental Dates

Tracking

Invoice

Support

---

## Timeline

Ordered

↓

Paid

↓

Processing

↓

Shipped

↓

Delivered

↓

Completed

Rental Timeline

Reserved

↓

Picked Up

↓

In Use

↓

Returned

↓

Completed

---

## Status Badges

Pending

Paid

Processing

Shipping

Delivered

Returned

Cancelled

Expired

Refunded

---

## Actions

Track Shipment

Extend Rental

Return Item

Download Invoice

Contact Support

Leave Review

Rent Again

Buy Again

---

## Empty States

No Orders

Start Shopping

No Rentals

Browse Rental

---

========================================================

# PAGE 09 — ABOUT

---

## Purpose

Build trust.

Tell the Nomad story.

Introduce the mission.

Show brand values.

---

## Layout

```
-------------------------------------------------------------
Sidebar | Hero
-------------------------------------------------------------
        | Story
-------------------------------------------------------------
        | Mission
-------------------------------------------------------------
        | Values
-------------------------------------------------------------
        | Team
-------------------------------------------------------------
```

---

## Hero

Large Outdoor Photography

Headline

Gear for Every Journey.

---

## Story

Nomad believes everyone deserves unforgettable outdoor experiences.

Whether buying or renting equipment, every adventure begins with trusted gear.

---

## Mission

Premium Equipment

Simple Rental

Outdoor Education

Community

Sustainability

---

## Core Values

Adventure

Trust

Nature

Community

Simplicity

Premium Experience

---

## Statistics

Products

Customers

Rental Locations

Community Members

Years of Experience

---

## Sustainability

Equipment Reuse

Eco Packaging

Responsible Consumption

---

## Community

User Stories

Events

Volunteer Programs

Outdoor Workshops

---

## CTA

Join the Community

Explore Shop

Read Journal

---

========================================================

# Shared Components

Sidebar

Navbar

Search

Cards

Timeline

Payment Card

Order Summary

Status Badge

FAQ

Accordion

Calendar

Statistics

Footer

Newsletter

Toast

Skeleton

Empty State

---

# Motion

Cards

Lift

Timeline

Fade

Buttons

Scale

Calendar

Slide

Status

Fade

Page

Fade Up

---

# Responsive

Desktop

Sidebar Fixed

2 Column Layout

---

Tablet

Collapsible Sidebar

---

Mobile

Drawer Navigation

Single Column

Sticky Action Buttons

---

# Accessibility

Keyboard Navigation

Visible Focus

High Contrast

Large Click Area

Semantic HTML

ARIA Labels

---

# Commerce Principles

Every payment should feel safe.

Every rental should feel transparent.

Every order should be easy to track.

Every return should be simple.

Every interaction should reduce uncertainty.

Users should always know:

• What they ordered

• What they rented

• Current status

• Next step

• Estimated timeline

Commerce should feel calm, trustworthy, premium, and effortless—reflecting Nomad's identity as a modern outdoor gear ecosystem rather than a conventional online store.
