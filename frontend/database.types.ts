export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _ClosedSaaSToOpenSaas: {
        Row: {
          closedsaas_id: number
          opensaas_id: number
        }
        Insert: {
          closedsaas_id: number
          opensaas_id: number
        }
        Update: {
          closedsaas_id?: number
          opensaas_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "_ClosedSaaSToOpenSaas_closedsaas_id_fkey"
            columns: ["closedsaas_id"]
            referencedRelation: "closedSaas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_ClosedSaaSToOpenSaas_opensaas_id_fkey"
            columns: ["opensaas_id"]
            referencedRelation: "openSaas"
            referencedColumns: ["id"]
          }
        ]
      }
      _OpenSaasToType: {
        Row: {
          OpenSaas_id: number
          Type_id: number
        }
        Insert: {
          OpenSaas_id: number
          Type_id: number
        }
        Update: {
          OpenSaas_id?: number
          Type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "_OpenSaasToType_OpenSaas_id_fkey"
            columns: ["OpenSaas_id"]
            referencedRelation: "openSaas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_OpenSaasToType_Type_id_fkey"
            columns: ["Type_id"]
            referencedRelation: "type"
            referencedColumns: ["id"]
          }
        ]
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      closedSaas: {
        Row: {
          description: string | null
          id: number
          name: string
          website: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
          website: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
          website?: string
        }
        Relationships: []
      }
      openSaas: {
        Row: {
          description: string
          github: string
          id: number
          logo: string | null
          name: string
          website: string
        }
        Insert: {
          description: string
          github: string
          id?: number
          logo?: string | null
          name: string
          website: string
        }
        Update: {
          description?: string
          github?: string
          id?: number
          logo?: string | null
          name?: string
          website?: string
        }
        Relationships: []
      }
      type: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
