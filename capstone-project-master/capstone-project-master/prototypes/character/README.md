## RPG Tabletop Digital Player Portfolio Project ##
### Code by E. Hunter Petross ###
#### StrayDog Syndications L.L.C. ####

# Application Description #

  This application is a digital repository for Tabletop RPG characters, including a Seven-style Dice emulator, digital inventory, and character experience tracker. Intitially created using the 3.5. Open Game License (See Below) system for Paizo&copy; Pathfinder&trade; 1st Edition. This expansive web based application allows a player to digitally transport and access their favorite character avatars on their mobile devices, share messages with their Game Master or Dungeon Master, and track their campaign progress and downtime activities using the various rule systems described in the Paizo&copy; Core Rulebook &amp; and the myriad other rulebooks &amp; supplemental guides available. All rules within this application are part of the 3.5. O.G.L. system, accessed from legally purchased copies of the Paizo Pocket Editions by the developer of this application. Resources, guides and supplemental materials can be found @ https://paizo.com/pathfinder

## Site Map ##

  1. index/html => The home page for 'Knucklebones of the Ficklest of Fortunes'
  - html/ contains the various subpages for the application including:
      - /tables => subfolder containing the various tables frome Core Rulebook
  - js/ contains the javascript files for the application, including:
      - pathfinderDice.js => main code for the RPG Dice emulator
      - constDice.js => holds variant code for Dice prototypes
      - rollDice.js => script for the single instance die sets
  - css/ contains the specific stylesheets for the application
  - assets/ contains various assets for the application as needed
  2. characterMain.html => Main input page for the player to crate characters, and modify the multiple pages that connect to the player's character sheet.
  - uses jsonCharacterOne.js to store local data for current character pages.
  3. cheatsheet.html => A short summary of the most commonly used terms and rules for the tabletop game enviroment. Also has links too the FAQ & Appendix pages included with the application for easy reference of the myriad rule systems available.
  4. haversack.html => Contains all the character inventory systems and the consumable item manager for each specific character the player controls.
  5. campaign.html => Tracks the various optional campaign systems as described by the various rulebooks and supplemental guides available from https://paizo.com/pathfinder

### OPEN GAME LICENSE Version 1.0a ###

The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.
1. Definitions: (a) "Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b) "Derivative Material" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgement or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute" means to reproduce, license, rent, sell, broadcast, publicly display, transmit or otherwise distribute; (d) "Open Game Content" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity" means product and product line names, logos and identifying marks including trade dress; artifacts, creatures, characters, stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions,likenesses, formats, poses, concepts, themes and graphic, photgraphic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, enviroments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product Identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used" or "Using" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You" or "Your" means the license in terms of this agreement.
2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.
3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of the License.
4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.
5. Representation of Authority to Contribute: if You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficent rights to grant the rights conveyed by this License.
6. Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the tiltle, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.
7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptibility with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of each Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.
8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.
9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.
10. Copy of this License: You MUST include a copy of this License with every copy of Open Game Content You distribute.
11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.
12. Inability to Comply: If it is impossible for You to comply withany of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.
13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.
14. Reformation: If any provision of this License is held to be unenforceable, such permissions shall be reformed only to the extent necessary to make it enforceable.
15. COPYRIGHT NOTICE

  Open Game License v 1.0a &copy; Copyright 2000, Wizards of the Coast, Inc.

  System Reference Document &copy; Copyright 2000, Wizards of the Coast, Inc; Authors: Jonathan Tweet, Monte Cook, and Skip Williams, based on material by E. Gary Gygax and Dave Arneson.

  Pathfinder Roleplaying Game Core Rulebook &copy; Copyright 2009, Paizo Publishing, LLC; Author: Jason Bulmahn, based on material by Jonathan Tweet, Monte Cook, and Skip Williams.

  Pathfinder Roleplaying Game Ultimate Campaign &copy; Copyright 2013, Paizo Publishing, LLC; Authors: Jesse Benner, Benjamin Bruck, Jason Bulmahn, Ryan Costello, Adam Daigle, Matt Goetz, Tim Hitchcock, James Jacobs, Ryan Macklin, Colin McComb, Jason Nelson, Richard Pett, Stephan Radney-MacFarland, Patrick Renie, Sean K. Reynolds, F. Wesley Schneider, James L. Sutter, Russ Taylor, and Stephen Townshend.

  Pathfinder RPG GameMastery Guide &copy; Copyright 2010, Paizo Publishing, LLC; Authors: Cam Banks, wolfgang Baur, Jason Bulmahn, Jim Butler, Eric Cagle, Graeme Davis, Adam Daigle, Joshua J. Frost, James Jacobs, Kenneth Hite, Steven Kenson, Robin Laws, Tito Leati, Rob McCreary, Hal Maclean, Colin McComb, Jason Nelson, David Noonan, Richard Pett, Rich Redman, Sean K. Reynolds, F. Wesley Schneider, Amber Scott, Doug Seacat, Mike Selinker, Lisa Stevens, James L. Sutter, Russ Taylor, Penny Williams, Skip Williams, amd Teeuwynn Woodruff.