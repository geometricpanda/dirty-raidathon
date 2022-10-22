terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file(".credentials/geometricpanda-4824ec9a6a50.json")

  project = "geometricpanda"
  region  = "europe-west2"
  zone    = "europe-west2-a"
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}
