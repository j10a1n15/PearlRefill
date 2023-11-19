register("command", () => {

    const inv = Player.getInventory();
    const pearlSlot = findInventorySlot(inv, 368);

    console.log(pearlSlot)

    ChatLib.chat("Test");
})
.setName("refillpearls")
.setAliases("refillp", "rpearls", "refillpearl", "rpearl", "pearlrefill", "pearlsrefill", "prefill", "pearlr")

function findInventorySlot(inventory, id) {
    const item = inventory.indexOf(id);
    if (item === -1) {
        return false;
    }
    return item;
}