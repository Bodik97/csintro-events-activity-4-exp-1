let YourPosition: Position = null
let Monster_Spawn_Position: Position = null
function Cage_Back_Wall () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    YourPosition,
    pos(101, 10, -37)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, -37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    YourPosition,
    pos(101, 10, 37)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, 37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    YourPosition,
    pos(107, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(107, 20, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    positions.add(
    YourPosition,
    pos(-27, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(-27, 20, -31)
    ),
    FillOperation.Replace
    )
}
mobs.onMobKilled(OCELOT, function () {
    mobs.spawn(OCELOT, positions.add(
    YourPosition,
    pos(randint(30, 60), 15, -32)
    ))
})
function Cage_Roof () {
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(101, 20, -32)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, -37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(101, 20, 32)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, 37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(102, 20, 31)
    ),
    positions.add(
    YourPosition,
    pos(107, 20, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(-22, 20, 31)
    ),
    positions.add(
    YourPosition,
    pos(-27, 20, -31)
    ),
    FillOperation.Replace
    )
}
mobs.onMobKilled(WOLF, function () {
    mobs.spawn(WOLF, positions.add(
    YourPosition,
    pos(103, 15, randint(-10, 10))
    ))
})
player.onChat("go", function () {
    YourPosition = player.position()
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_SWORD,
    1
    )
    Bottom_of_Walls()
    Glass_for_Cage()
    Cage_Back_Wall()
    Cage_Floor()
    Cage_Roof()
    Cage_End_Caps()
    Spawn_Monsters()
    Print_Words()
})
function Random_Position () {
    Monster_Spawn_Position = randpos(
    positions.add(
    YourPosition,
    pos(101, 0, -31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 0, 31)
    )
    )
}
mobs.onMobKilled(mobs.monster(GUARDIAN), function () {
    mobs.spawn(mobs.monster(GUARDIAN), positions.add(
    YourPosition,
    pos(-23, 15, randint(-10, 10))
    ))
})
function Glass_for_Cage () {
    blocks.fill(
    GLASS_PANE,
    positions.add(
    YourPosition,
    pos(101, 10, -31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    positions.add(
    YourPosition,
    pos(101, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, 31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    positions.add(
    YourPosition,
    pos(101, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(101, 20, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    positions.add(
    YourPosition,
    pos(-21, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 20, -31)
    ),
    FillOperation.Replace
    )
}
function Cage_End_Caps () {
    blocks.fill(
    MAGMA_BLOCK,
    positions.add(
    YourPosition,
    pos(101, 10, -31)
    ),
    positions.add(
    YourPosition,
    pos(107, 20, -37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    MAGMA_BLOCK,
    positions.add(
    YourPosition,
    pos(101, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(107, 20, 37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    MAGMA_BLOCK,
    positions.add(
    YourPosition,
    pos(-21, 10, -31)
    ),
    positions.add(
    YourPosition,
    pos(-27, 20, -37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    MAGMA_BLOCK,
    positions.add(
    YourPosition,
    pos(-21, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(-27, 20, 37)
    ),
    FillOperation.Replace
    )
}
function Spawn_Monsters () {
    Random_Position()
    for (let index = 0; index < 20; index++) {
        mobs.spawn(mobs.monster(CAVE_SPIDER), Monster_Spawn_Position)
    }
    Random_Position()
    for (let index = 0; index < 20; index++) {
        mobs.spawn(OCELOT, Monster_Spawn_Position)
    }
    Random_Position()
    for (let index = 0; index < 20; index++) {
        mobs.spawn(WOLF, Monster_Spawn_Position)
    }
    Random_Position()
    for (let index = 0; index < 20; index++) {
        mobs.spawn(mobs.monster(GUARDIAN), Monster_Spawn_Position)
    }
}
function Cage_Floor () {
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(101, 10, -32)
    ),
    positions.add(
    YourPosition,
    pos(-21, 10, -37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(101, 10, 32)
    ),
    positions.add(
    YourPosition,
    pos(-21, 10, 37)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(102, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(107, 10, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(-22, 10, 31)
    ),
    positions.add(
    YourPosition,
    pos(-27, 10, -31)
    ),
    FillOperation.Replace
    )
}
function Print_Words () {
    blocks.print(
    "Cave Spiders",
    BLACK_GLAZED_TERRACOTTA,
    positions.add(
    YourPosition,
    pos(0, 0, 30)
    ),
    EAST
    )
    blocks.print(
    "Ocelots",
    YELLOW_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(20, 0, -30)
    ),
    EAST
    )
    blocks.print(
    "Wolves",
    WHITE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(100, 0, 20)
    ),
    NORTH
    )
    blocks.print(
    "Guardians",
    ORANGE_SHULKER_BOX,
    positions.add(
    YourPosition,
    pos(-20, 0, 25)
    ),
    NORTH
    )
}
function Bottom_of_Walls () {
    blocks.fill(
    GRAY_CONCRETE,
    positions.add(
    YourPosition,
    pos(101, 0, -31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 10, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GRAY_CONCRETE,
    positions.add(
    YourPosition,
    pos(101, 0, 31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 10, 31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GRAY_CONCRETE,
    positions.add(
    YourPosition,
    pos(101, 0, 31)
    ),
    positions.add(
    YourPosition,
    pos(101, 10, -31)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    GRAY_CONCRETE,
    positions.add(
    YourPosition,
    pos(-21, 0, 31)
    ),
    positions.add(
    YourPosition,
    pos(-21, 10, -31)
    ),
    FillOperation.Replace
    )
}
mobs.onMobKilled(mobs.monster(CAVE_SPIDER), function () {
    mobs.spawn(mobs.monster(CAVE_SPIDER), positions.add(
    YourPosition,
    pos(randint(30, 60), 15, 32)
    ))
})
