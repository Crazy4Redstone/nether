// Nether Mod
// Made by Crazy4Redstone

// Items

ModPE.setItem (372,'nether_wart',0,'Nether Wart Seeds')

// Blocks

Block.defineBlock (88,'Soul Sand',[['soul_sand',0]],2,false,7)
Block.setShape (88,0,0,0,1,15/16,1)
Block.setDestroyTime (88,1.5)

Block.defineBlock (115,'Nether Wart S1',[['nether_wart_stage_x',0]],50,false,6)
Block.setRenderLayer (115,1)
Block.setDestroyTime (115,0.50)

Block.defineBlock (116,'Nether Wart S2',[['nether_wart_stage_x',1]],50,false,6)
Block.setRenderLayer (116,1)
Block.setDestroyTime (116,0.50)

Block.defineBlock (117,'Nether Wart S3',[['nether_wart_stage_x',2]],50,false,6)
Block.setRenderLayer (117,1)
Block.setDestroyTime (117,0.50)

// Code

function useItem (x,y,z,itemId,blockId,side)
{
  if (itemId == 372 && blockId == 88 && side == 1)
  {
    setTile (x,y+1,z,115)
    addItemInventory (372,-1)
  }
  if (itemId == 0 && blockId == 115)
  {
    setTile (x,y,z,116)
  }
  if (itemId == 0 && blockId == 116)
  {
    setTile (x,y,z,117)
  }
}  

