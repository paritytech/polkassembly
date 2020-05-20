# Change Log

All notable changes to this project will be documented in this file.

## 0.2.0 (2020-05-20)
Add getFailingThreshold. Use the aye/nay without conviction. The guess on the threshold makes the assumption that all votes have a convistion of x1.

## 0.1.3 (2020-04-15)
Fix a case were Supermajority threshold was not returning any value although a root was found.

## 0.1.2 (2020-04-13)
`getPassingThreshold` returns an object `{ isValid: boolean, passingThreshold?: BN }` with `isValid` being true if a threshold was found.

## 0.1.1 (2020-04-13)
Add function descriptions, fix typo in Readme and fix imports.

## 0.1.0 Initial release (2020-04-13)