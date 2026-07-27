import {
  ToolLoopAgent,
  type InferAgentUIMessage,
  type UIToolInvocation,
} from "ai";
import { getAllCategories, getProductDetails, returnOrder, searchProducts, } from "@/lib/tools";


export type ShoppingAgentUIMessage = InferAgentUIMessage<typeof shoppingAgent>;
export type SearchProductsToolInvocation = UIToolInvocation<typeof searchProducts>;
export type ProductDetailsToolInvocation = UIToolInvocation<typeof getProductDetails>;


export const shoppingAgent = new ToolLoopAgent({ model: "anthropic/claude-sonnet-4.6", instructions: "Respond like Arya Stark", tools: { searchProducts, getAllCategories, getProductDetails, returnOrder } });