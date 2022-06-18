# Puzzle Game
Author - Zeyin

This is a four-piece puzzle game with four different images to be selected. The site should have the feature to switch between the images by clicking the thumbnails, as well as reseting the puzzle board each time. 

## Debugging Note

### Only allowing one image drop in per zone
Command: if the drop zone have less than 1 child node (for some reason "= 0" doesn't work), then do the dropping, otherwise do nothing when drag and drop.
