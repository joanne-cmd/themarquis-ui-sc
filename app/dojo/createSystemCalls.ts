import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@latticexyz/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { Direction, updatePositionWithDirection } from "../utils";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";
import { getContractByName } from "@dojoengine/core";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { execute, contractComponents, provider }: SetupNetworkResult,
  { Position, Moves }: ClientComponents
) {
  // const spawn = async (signer: Account) => {
  //   const entityId = signer.address.toString() as Entity;

  //   const positionId = uuid();
  //   Position.addOverride(positionId, {
  //     entity: entityId,
  //     value: { vec: { x: 10, y: 10 } },
  //   });

  //   const movesId = uuid();
  //   Moves.addOverride(movesId, {
  //     entity: entityId,
  //     value: { remaining: 10 },
  //   });

  //   try {
  //     const tx = await execute(signer, "actions", "spawn", []);
  //     setComponentsFromEvents(
  //       contractComponents,
  //       getEvents(
  //         await signer.waitForTransaction(tx.transaction_hash, {
  //           retryInterval: 100,
  //         })
  //       )
  //     );
  //   } catch (e) {
  //     console.log(e);
  //     Position.removeOverride(positionId);
  //     Moves.removeOverride(movesId);
  //   } finally {
  //     Position.removeOverride(positionId);
  //     Moves.removeOverride(movesId);
  //   }
  // };

  const spawn = async (signer: Account) => {
    console.log("debug spawn");
    console.log(getContractByName(provider.manifest, "actions"));
    // mint
    try {
      const tx = await execute(signer, "erc_systems", "mint_", [
        signer.address,
        10000000,
        0,
      ]);
      const events = getEvents(
        await signer.waitForTransaction(tx.transaction_hash, {
          retryInterval: 100,
        })
      );

      console.log(contractComponents);

      console.log(events);
      // setComponentsFromEvents(
      //   contractComponents,
      //   getEvents(
      //     await signer.waitForTransaction(tx.transaction_hash, {
      //       retryInterval: 100,
      //     })
      //   )
      // );
    } catch (e) {
      console.log(e);
    }
  };

  const move = async (signer: Account, direction: Direction) => {
    try {
      const tx = await execute(signer, "actions", "move", [1, 1, 1, 1, 1]);
      // setComponentsFromEvents(
      //   contractComponents,
      //   getEvents(
      //     await signer.waitForTransaction(tx.transaction_hash, {
      //       retryInterval: 100,
      //     })
      //   )
      // );
    } catch (e) {
      console.log(e);
    }
  };

  // const move = async (signer: Account, direction: Direction) => {
  //   const entityId = signer.address.toString() as Entity;

  //   const positionId = uuid();
  //   Position.addOverride(positionId, {
  //     entity: entityId,
  //     value: updatePositionWithDirection(
  //       direction,
  //       // currently recs does not support nested values so we use any here
  //       getComponentValue(Position, entityId) as any
  //     ),
  //   });

  //   const movesId = uuid();
  //   Moves.addOverride(movesId, {
  //     entity: entityId,
  //     value: {
  //       remaining: (getComponentValue(Moves, entityId)?.remaining || 0) - 1,
  //     },
  //   });

  //   try {
  //     const tx = await execute(signer, "actions", "move", [direction]);
  //     setComponentsFromEvents(
  //       contractComponents,
  //       getEvents(
  //         await signer.waitForTransaction(tx.transaction_hash, {
  //           retryInterval: 100,
  //         })
  //       )
  //     );
  //   } catch (e) {
  //     console.log(e);
  //     Position.removeOverride(positionId);
  //     Moves.removeOverride(movesId);
  //   } finally {
  //     Position.removeOverride(positionId);
  //     Moves.removeOverride(movesId);
  //   }
  // };

  return {
    spawn,
    move,
  };
}
